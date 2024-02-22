import React from "react";

// import AboutSectionBucket from "./about-section-bucket";
import About from "./about";
import BlogBanner from "./blog-banner";
// import BlogSection from "./blog-section";
import Events from "./events";
import CardSection from "./card-section";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import { RenderProps } from "../typescript/component";
import Section from "./section";
// import SectionBucket from "./section-bucket";
// import SectionWithHtmlCode from "./section-with-html-code";
// import TeamSection from "./team-section";
import Testimonial from "./testimonial";
// import WhyUs from "./why_us";

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        if (component.hero_banner) {
          return blogPost ? (
            <BlogBanner
              blogBanner={component.hero_banner}
              key={`component-${key}`}
            />
          ) : (
            <HeroBanner
              banner={component.hero_banner}
              key={`component-${key}`}
            />
          );
        }
        if (component.section) {
          return (
            <Section section={component.section} key={`component-${key}`} />
          );
        }
        if (component.gallery) {
          return (
            <Gallery section={component.gallery} key={`component-${key}`} />
          );
        }
        if (component.events) {
          return <Events section={component.events} key={`component-${key}`} />;
        }
        if (component.about) {
          return <About section={component.about} key={`component-${key}`} />;
        }
        // if (component.why_us) {
        //   return <WhyUs section={component.why_us} key={`component-${key}`} />;
        // }
        if (component.testimonial) {
          return (
            <Testimonial
              section={component.testimonial}
              key={`component-${key}`}
            />
          );
        }
        // if (component.section_with_buckets) {
        //   return component.section_with_buckets.bucket_tabular ? (
        //     <AboutSectionBucket
        //       sectionWithBuckets={component.section_with_buckets}
        //       key={`component-${key}`}
        //     />
        //   ) : (
        //     <SectionBucket
        //       section={component.section_with_buckets}
        //       key={`component-${key}`}
        //     />
        //   );
        // }
        // if (component.from_blog) {
        //   return (
        //     <BlogSection
        //       fromBlog={component.from_blog}
        //       key={`component-${key}`}
        //     />
        //   );
        // }
        // if (component.section_with_cards) {
        //   return (
        //     <CardSection
        //       cards={component.section_with_cards.cards}
        //       key={`component-${key}`}
        //     />
        //   );
        // }
        // if (component.section_with_html_code) {
        //   return (
        //     <SectionWithHtmlCode
        //       embedCode={component.section_with_html_code}
        //       key={`component-${key}`}
        //     />
        //   );
        // }
        // if (component.our_team) {
        //   return (
        //     <TeamSection
        //       ourTeam={component.our_team}
        //       key={`component-${key}`}
        //     />
        //   );
        // }
      })}
    </div>
  );
}
