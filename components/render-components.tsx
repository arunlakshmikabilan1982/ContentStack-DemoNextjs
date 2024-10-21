import { RenderProps } from "../typescript/component";
import AboutItma from "./about-itma";
import Banner from "./banner";
import Brands from "./brands";
import ItmaFAQ from "./itma_faq";
import ItmaBlogNews from "./itma-blog-news";
import ITMAConnect from "./itma-connect";
import JoinItma from "./join-itma";
import Register from "./register";

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  console.log("pageComponents:", pageComponents);
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        if (component.banner) {
          return <Banner section={component.banner} key={`component-${key}`} />;
        }
        if (component.register) {
          return (
            <Register section={component.register} key={`component-${key}`} />
          );
        }

        if (component.about_itma) {
          return <AboutItma key={`component-${key}`} />;
        }

        if (component.itma_blogs_and_news) {
          return (
            <ItmaBlogNews
              section={component.itma_blogs_and_news}
              key={`component-${key}`}
            />
          );
        }

        if (component.itma_connect) {
          return (
            <ITMAConnect
              section={component.itma_connect}
              key={`component-${key}`}
            />
          );
        }

        if (component["brands"]) {
          return <Brands section={component.brands}
           key={`component-${key}`} />;
        }

        if (component.join_itma) {
          return (
            <JoinItma section={component.join_itma} key={`component-${key}`} />
          );
        }
        if (component.itma_faq) {
          return (
            <ItmaFAQ section={component.itma_faq} key={`component-${key}`} />
          );
        }
      })}
    </div>
  );
}
