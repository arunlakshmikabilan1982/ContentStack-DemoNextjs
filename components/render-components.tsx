import React from "react";

import Section from "./section";
import HeroBanner from "./hero-banner";
import BlogBanner from "./blog-banner";
import CardSection from "./card-section";
import TeamSection from "./team-section";
import BlogSection from "./blog-section";
import SectionBucket from "./section-bucket";
import AboutSectionBucket from "./about-section-bucket";
import SectionWithHtmlCode from "./section-with-html-code";
import Gallery from "./gallery";
import { RenderProps } from "../typescript/component";
import SpecialsSection from "./specials";
import ContactUsSection from "./contactus";
import MenuSection from "./menu";
// import BookiingSection from "./booking";
import BookingSection from "./booking";
import Events from "./events";
import AboutSection from "./about";
import TestimonialSection from "./testimonial";
// import BookingReservation from "./booking_table";
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
            <Gallery section={component.gallery} key={`component-${key}`} />
          );
        }

        if (component.events) {
          return <Events section={component.events} key={`component-${key}`} />;
        }
        if (component.about) {
          return (
            <AboutSection section={component.about} key={`component-${key}`} />
          );
        }
        if (component.booking_table) {
          return (
            <BookingReservation
              section={component.booking_table}
              key={`component-${key}`}
            />
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

        if (component.booking) {
          return (
            <BookingSection
              section={component.booking}
              key={`component-${key}`}
            />
          );
        }
      })}
    </div>
  );
}
