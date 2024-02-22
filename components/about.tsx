import React from "react";
import { Image } from "../typescript/action";

type AdditionalParam = {
  banner_title: string;
  banner_description: string;
  about_title: String;
  about_description: String;
  description_points: [String];
  conclution: String;
};

type AboutProps = {
  about_title: String;
  bg_img: Image;
  about_description: String;
  conclution: String;
  about_image: Image;
  description_points: [String];
  $: AdditionalParam;
};

export default function AboutSection({ section }: { section: AboutProps }) {
  return (
    <section
      id="about"
      className="about"
      style={{ background: `url(${section?.bg_img})` }}
    >
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <img
                src={section?.about_image?.url}
                alt="about_image"
                {...(section?.about_image.$?.url as {})}
              />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3 {...(section.$?.about_title as {})}>{section.about_title}</h3>
            <p className="fst-italic" {...(section.$?.about_description as {})}>
              {section.about_description}
            </p>
            <ul {...(section.$?.description_points as {})}>
              {section.description_points.map((string, index) => (
                <li key={index}>
                  <i className="bi bi-check-circle"></i> {string}
                </li>
              ))}
            </ul>
            <p {...section.$?.conclution}>{section.conclution}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
