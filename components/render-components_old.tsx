import React from "react";

import HeroBanner from "./hero-banner";
import BlogBanner from "./blog-banner";
import SectionWithHtmlCode from "./section-with-html-code";
import GalleryImagesSection from "./gallery";
import { RenderProps } from "../typescript/component";
import SpecialsSection from "./specials";
import ContactUsSection from "./contactus";
import MenuSection from "./menu";
import BookingSection from "./booking";
import EventsSection from "./events";
import AboutSection from "./about";
import TestimonialSection from "./testimonial";
import WhyUsSection from "./why_us";
import ChefsSection from "./chef";

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
        // if (component.section) {
        //   return (
        //     <Section section={component.section} key={`component-${key}`} />
        //   );
        // }

        if (component.gallery) {
          return (
            <GalleryImagesSection section={component.gallery} key={`component-${key}`} />
          );
        }

        if (component.events) {
          return <EventsSection section={component.events} key={`component-${key}`} />;
        }
        if (component.about) {
          return (
            <AboutSection section={component.about} key={`component-${key}`} />
          );
        }
        if (component.testimonial) {
          return (
            <TestimonialSection
              section={component.testimonial}
              key={`component-${key}`}
            />
          );
        }
        if (component.why_us) {
          return (
            <WhyUsSection section={component.why_us} key={`component-${key}`} />
          );
        }
        if (component.specials) {
          return (
            <SpecialsSection
              section={component.specials}
              key={`component-${key}`}
            />
          );
        }

        if (component.chef) {
          return (
            <ChefsSection section={component.chef} key={`component-${key}`} />
          );
        }

        if (component.contactus) {
          return (
            <ContactUsSection
              section={component.contactus}
              key={`component-${key}`}
            />
          );
        }
        if (component.menu) {
          return (
            <MenuSection section={component.menu} key={`component-${key}`} />
          );
        }
        if (component.booking) {
          return (
            <BookingSection
              section={component.booking}
              key={`component-${key}`}
            />
          );
        }

        // if (component.section_with_cards) {
        //   return (
        //     <CardSection
        //       cards={component.section_with_cards.cards}
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

        if (component.section_with_html_code) {
          return (
            <SectionWithHtmlCode
              embedCode={component.section_with_html_code}
              key={`component-${key}`}
            />
          );
        }
      })}
    </div>
  );
}
