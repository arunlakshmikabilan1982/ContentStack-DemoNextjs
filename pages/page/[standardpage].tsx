import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../../contentstack-sdk';
import RenderComponents from '../../components/render-standardpage-components';
import { getStandardPageRes } from '../../helper';
import Skeleton from 'react-loading-skeleton';
import { Props } from "../../typescript/pages";

export default function StandardPage(props: Props) {
  const { standardPageProps} = props;
  const { standardpage, entryUrl } = standardPageProps;
  const [getEntry, setEntry] = useState(standardpage);

  async function fetchData() {
    try {
      const entryRes = await getStandardPageRes(entryUrl);
      if (!entryRes) throw new Error('Status code 404');
      setEntry(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [standardpage]);

  return getEntry.page_components ? (
    <RenderComponents
      pageComponents={getEntry.page_components}
      contentTypeUid='standardpage'
      entryUid={getEntry.uid}
      locale={getEntry.locale}
    />
  ) : (
    <Skeleton count={3} height={300} />
  );
}

export async function getServerSideProps({params}: any) {
  try {
      const entryUrl = params.page.includes('/') ? params.page:`/${params.page}`
      const entryRes = await getStandardPageRes(entryUrl);
      if (!entryRes) throw new Error('404');
      return {
        props: {
          entryUrl: entryUrl,
          page: entryRes,
        },
      };

  } catch (error) {
    return { notFound: true };
  }
}
