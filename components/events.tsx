import React from "react";
import { Image } from "../typescript/action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

type AdditionalParam = {
  title: string;
  description: string;
  event_title: String;
  event_price: String;
  event_description: String;
  event_point: String;
  event_conclusion: String;
};

type List_of_Events = {
  event_image: Image;
  event_title: String;
  event_price: String;
  event_description: String;
  event_points: [String];
  event_conclusion: String;
  $: AdditionalParam;
};

type EventProps = {
  title: String;
  description: String;
  Background_img: Image;
  events: [List_of_Events];
  $: AdditionalParam;
};

export default function EventsSection({ section }: { section: EventProps }) {
  console.log(section.events[0].event_image.$?.url as {});
  return (
    <section id="events" className="events">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 {...(section.$?.title as {})}>{section.title}</h2>
          <p {...(section.$?.description as {})}>{section.description}</p>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {section?.events?.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="row event-item">
                <div className="col-lg-6">
                  {event && (
                    <a
                      href={event.event_image?.url}
                      className="events-lightbox"
                    >
                      <img
                        {...(event?.event_image.$?.url as {})}
                        src={event?.event_image.url}
                        className="img-fluid"
                        alt="event"
                      />
                    </a>
                  )}
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content">
                  <h3 {...(event.$?.event_title as {})}>{event.event_title}</h3>
                  <div className="price">
                    <p>
                      <span {...(event.$?.event_price as {})}>
                        ${event.event_price}
                      </span>
                    </p>
                  </div>
                  <p className="fst-italic">{event?.event_description}</p>
                  {event?.event_points?.map((event_point, index) => (
                    <ul key={index}>
                      <li>
                        <i
                          className="bi bi-check-circled"
                          {...(event.$?.event_point as {})}
                        ></i>{" "}
                        {event_point}
                      </li>
                    </ul>
                  ))}
                  <p>{event.event_conclusion}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
        {/* </div> */}
        {/* <div className="swiper-pagination"></div> */}
      </div>
    </section>
  );
}

{
  /* <div className="swiper-slide" key={index}>
                <div className="row event-item">
                  <div className="col-lg-6">
                    {event && (
                      <a
                        href={event.event_image?.url}
                        className="events-lightbox"
                      >
                        <img
                          {...(event?.event_image.$?.url as {})}
                          src={event?.event_image.url}
                          className="img-fluid"
                          alt="event"
                        />
                        <img src={event?.event_image} alt="event_img" />
                      </a>
                    )}
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>{event.event_title}</h3>
                    <div className="price">
                      <p>
                        <span>${event.event_price}</span>
                      </p>
                    </div>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circled"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circled"></i> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circled"></i> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div> */
}

// <div className="swiper-slide">
//               <div className="row event-item">
//                 <div className="col-lg-6">
//                   <img
//                     src="assets/img/event-private.jpg"
//                     className="img-fluid"
//                     alt=""
//                   />
//                 </div>
//                 <div className="col-lg-6 pt-4 pt-lg-0 content">
//                   <h3>Private Parties</h3>
//                   <div className="price">
//                     <p>
//                       <span>$290</span>
//                     </p>
//                   </div>
//                   <p className="fst-italic">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                   <ul>
//                     <li>
//                       <i className="bi bi-check-circled"></i> Ullamco laboris
//                       nisi ut aliquip ex ea commodo consequat.
//                     </li>
//                     <li>
//                       <i className="bi bi-check-circled"></i> Duis aute irure
//                       dolor in reprehenderit in voluptate velit.
//                     </li>
//                     <li>
//                       <i className="bi bi-check-circled"></i> Ullamco laboris
//                       nisi ut aliquip ex ea commodo consequat.
//                     </li>
//                   </ul>
//                   <p>
//                     Ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="swiper-slide">
//               <div className="row event-item">
//                 <div className="col-lg-6">
//                   <img
//                     src="assets/img/event-custom.jpg"
//                     className="img-fluid"
//                     alt=""
//                   />
//                 </div>
//                 <div className="col-lg-6 pt-4 pt-lg-0 content">
//                   <h3>Custom Parties</h3>
//                   <div className="price">
//                     <p>
//                       <span>$99</span>
//                     </p>
//                   </div>
//                   <p className="fst-italic">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                     do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua.
//                   </p>
//                   <ul>
//                     <li>
//                       <i className="bi bi-check-circled"></i> Ullamco laboris
//                       nisi ut aliquip ex ea commodo consequat.
//                     </li>
//                     <li>
//                       <i className="bi bi-check-circled"></i> Duis aute irure
//                       dolor in reprehenderit in voluptate velit.
//                     </li>
//                     <li>
//                       <i className="bi bi-check-circled"></i> Ullamco laboris
//                       nisi ut aliquip ex ea commodo consequat.
//                     </li>
//                   </ul>
//                   <p>
//                     Ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur
//                   </p>
//                 </div>
//               </div>
//             </div>
