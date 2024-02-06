import React from 'react';

import Gallery from './gallery';
import { RenderStandardPageProps } from "../typescript/component";

export default function RenderComponents(props: RenderStandardPageProps) {
  const { pageComponents, entryUid, contentTypeUid, locale } = props;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
    
        if(component.gallery){
          return (
            <Gallery section={component.gallery} key={`component-${key}`} />
          );
        }
        
      })}
    </div>
  );
}
