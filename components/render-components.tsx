import { RenderProps } from "../typescript/component";
import Banner from "./banner";
import Brands from "./brands";
import ItmaBlogNews from "./itma-blog-news";
import ITMAConnect from "./itma-connect";
import JoinItma from "./join-itma";
import Register from "./register";

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
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
          return <Register key={`component-${key}`} />;
        }
        if (component["itma-blogs-and-news"]) {
          return <ItmaBlogNews key={`component-${key}`} />;
        }

        if (component["itma-connect"]) {
          return (
            <ITMAConnect
            key={`component-${key}`}
          />
          );
        } 

        if (component["brands"]) {
          return (
            <Brands
            key={`component-${key}`}
          />
          );
        } 

        if (component["join-itma"]) {
          return (
            <JoinItma
            key={`component-${key}`}
          />
          );
        } 
      })}
    </div>
  );
}
