import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/layout';
import { getHeaderRes, getFooterRes, getAllEntries } from '../helper';
import 'nprogress/nprogress.css';
import '../styles/third-party.css';
import '../styles/restaurantly.css';
import '../styles/footer.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '@contentstack/live-preview-utils/dist/main.css';
import { Props } from "../typescript/pages";


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp(props: Props) {
  const { Component, pageProps, standardPageProps, header, footer, entries } = props;
  const { page, posts, archivePost, blogPost } = pageProps;
  // const { standardpage } = standardPageProps;
  const metaData = (seo: any) => {
    const metaArr = [];
    for (const key in seo) {
      if (seo.enable_search_indexing) {
        metaArr.push(
          <meta
            name={
              key.includes('meta_')
                ? key.split('meta_')[1].toString()
                : key.toString()
            }
            content={seo[key].toString()}
            key={key}
          />
        );
      }
    }
    return metaArr;
  };
  const blogList: any = posts?.concat(archivePost);
  return (
    <>
      <Head>
        <meta
          name='application-name'
          content='ITMA 2027 Contentstack Demo'
        />
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1'
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name='theme-color' content='#317EFB' />
        <title>ITMA 2027 Contentstack Demo</title>
        {page?.seo && page.seo.enable_search_indexing && metaData(page.seo)}
        {/* {standardpage?.seo && page.seo.enable_search_indexing && metaData(standardpage.seo)} */}
      </Head>
      <Layout
        header={header}
        footer={footer}
        page={page}
        // standardpage={standardpage}
        blogPost={blogPost}
        blogList={blogList}
        entries={entries}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const locale = appContext.ctx.locale;
  const appProps = await App.getInitialProps(appContext);
  const header = await getHeaderRes(locale);
  const footer = await getFooterRes(locale);
  const entries = await getAllEntries(locale);

  return { ...appProps, header, footer, entries };
};

export default MyApp;
