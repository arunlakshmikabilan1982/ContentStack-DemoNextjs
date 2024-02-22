import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Image } from "../typescript/action";

type AdditionalParam = {
  title: string;
  description: string;
  words_by_testimonial: String;
  testimonial_name: String;
  testimonial_role: String;
};

type TestimoinalItems = {
  words_by_testimonial: String;
  testimonial_name: String;
  testimonial_role: String;
  testimonial_snap: Image;
  $: AdditionalParam;
};

type TestimonialProps = {
  title: String;
  description: String;
  testimonial_items: [TestimoinalItems];
  $: AdditionalParam;
};

export default function TestimonialSection({
  section,
}: {
  section: TestimonialProps;
}) {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aosNamclassName="fade-up">
        <div className="section-title">
          <h2 {...(section.$?.title as {})}>{section.title}</h2>
          <p {...(section.$?.description as {})}> {section.description}</p>
        </div>
        <div
          className="testimonials-slider swiper"
          data-aosNamclassName="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            className="testimonialSwiper"
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 100 }}
            pagination={{ clickable: true }}
          >
            <div className="TestimonialInner">
              <div className="Testimonial">
                <div className="TesimonialCarousel">
                  {section.testimonial_items.map((item) => (
                    <>
                      <SwiperSlide>
                        <div className="testimonial-item">
                          <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            {item.words_by_testimonial}
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                          </p>
                          <div className="testimonial-carousel-item2">
                            <img
                              {...(item.testimonial_snap.$?.url as {})}
                              className="testimonial-img"
                              src={item?.testimonial_snap?.url}
                              alt="testimonials_photo"
                            />
                          </div>
                          <div className="testimonial-carousel-item3">
                            <h3
                              className="testimonial-carousel-name"
                              {...(item.$?.testimonial_name as {})}
                            >
                              {item.testimonial_name}
                            </h3>
                            <h4
                              className="testimonial-carousel-role"
                              {...(item.$?.testimonial_role as {})}
                            >
                              {item.testimonial_role}
                            </h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
