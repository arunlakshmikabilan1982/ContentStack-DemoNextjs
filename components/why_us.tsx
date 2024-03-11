import React from "react";

type AdditionalParam = {
  title: String;
  description: String;
};

type WhyUsCards = {
  card_no: number;
  card_descripton: String;

  card_title: String;
};

type WhyUsProps = {
  title: String;
  description: String;
  why_us_items: [WhyUsCards];
  $: AdditionalParam;
};

export default function WhyUsSection({ section }: { section: WhyUsProps }) {
  return (
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 {...(section.$?.title as {})}>{section.title}</h2>
          <p {...(section.$?.description as {})}> {section.description}</p>
        </div>

        <div className="row">
          {section.why_us_items.map((card, index) => (
            <div className="col-lg-4" key={index}>
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <span>{card.card_no}</span>
                <h4>{card.card_title}</h4>
                <p>{card.card_descripton}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
