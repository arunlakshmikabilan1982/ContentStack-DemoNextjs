import { useState } from "react";
import BlogIcon from "../assets/svg/blog-icon.svg";
import AccordionArrow from "../assets/svg/AccordionArrow.svg";
import Image from "next/image";

type Itma_Faq_Questions = {
  question: string;
  answer: string;
};

type ItmaFAQprops = {
  faq_sub_title: string;
  faq_main_title: string;
  questions: Itma_Faq_Questions[];
};

export default function ItmaFAQ({ section }: { section: ItmaFAQprops }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="Itma-faq">
      <div className="faq-titles-container">
        <Image src={BlogIcon} alt="icon" />
        <div className="faq-sub-title">{section.faq_sub_title}</div>
        <div className="faq-main-title">{section.faq_main_title}</div>
      </div>
      {section.questions.map((ques, index) => (
        <div
          className="frame-3473-872732"
          key={index}
          onClick={() => toggleAccordion(index)}
        >
          <div className="frame-3479-872733">
            <div className="what-is-itma-872734">{ques.question}</div>
            <div
              className={`accordion-icon ${openIndex === index ? "open" : ""}`}
            >
              {/* Down arrow icon */}
              {/* <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 15.4l-5.4-5.4h10.8z" />
              </svg> */}
              <Image src={AccordionArrow} alt="icon" />
            </div>
          </div>
          {openIndex === index && (
            <>
              <div className="answer">
                <p>{ques.answer}</p>
              </div>
            </>
          )}
          <div className="separator" /> {/* Separator only here */}

        </div>
      ))}
    </section>
  );
}
