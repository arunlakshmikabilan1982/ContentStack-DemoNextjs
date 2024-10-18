import { RenderProps } from "../typescript/component";
import AboutItma from "./about-itma";
import Banner from "./banner";
import Brands from "./brands";
import ITMAConnect from "./itma-connect";
import ItmaBlogNews from "./itma-blog-news";
import Register from "./register";
import JoinItma from "./join-itma";

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  console.log("pageComponents:",pageComponents)
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      
      {
      pageComponents?.map((component, key: number) => {
        
        if (component.banner) {
          return <Banner section={component.banner} key={`component-${key}`} />;
        }
        if (component.register) {
          return <Register section={component.register} key={`component-${key}`} />;
        }

        
        if (component.about_itma) {
          return <AboutItma key={`component-${key}`} />;
        }

        if (component.itma_blogs_and_news) {
          return (
            <ItmaBlogNews
            key={`component-${key}`}
          />)
        }

        if (component.itma_connect) {
          return (
            <ITMAConnect section={component.itma_connect} key={`component-${key}`} />
          );
        } 

        if (component["brands"]) {
          return (
            <Brands
            key={`component-${key}`}
          />
          );
        } 

        if (component.join_itma) {
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
