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
import Banner from "./banner";
import Register from "./register";

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, blogPost, entryUid, contentTypeUid, locale } = props;
  console.log("pageComponents", pageComponents)
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        if (component.banner) {
          return (
            <Banner
              key={`component-${key}`}
            />
          );
        } 
        if (component.register) {
          return (
            <Register
            key={`component-${key}`}
          />
          );
        } 
      })}
    </div>
  );
}
