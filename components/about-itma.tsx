import React from "react";
import Image, { StaticImageData } from "next/image";
import Logo from '../assets/svg/logo.svg';
import BlogIcon from '../assets/svg/blog-icon.svg';
import BlogImage1 from '../assets/images/what-is-itma.png';
import BlogImage2 from '../assets/images/global-platform-everyone.png';
import BlogImage3 from '../assets/images/key-focus.png';
import BlogImage4 from '../assets/images/official-events.png';
import parse from 'html-react-parser';
import DottedLine from '../assets/images/dottedLine.png';

const data = [
  {
    id: 1,
    title: 'What is ITMA?',
    body: `The World's Largest Textile & Garment Technology Showcase`,
    content: `Learn about ITMA's mission, history, and how it brings together innovators and industry leaders from around the globe.`,
    footer: 'Read More About ITMA',
    image: BlogImage1,
  },
  {
    id: 2,
    title: 'A Global Platform for Everyone',
    body: `Join the Global Conversation Shaping the Future of Textiles`,
    content: `Whether you're an exhibitor showcasing the latest innovations, a visitor exploring cutting-edge technologies, or media covering groundbreaking industry trends, ITMA offers unparalleled opportunities to connect, learn, and grow.`,
    footer: '',
    image: BlogImage2,
  },
  {
    id: 3,
    title: 'Key focus areas of ITMA 2027',
    body: `Discover What's New at ITMA 2027`,
    content: `<ul><li>Sustainability Focus</li><li>Innovative Technologies</li><li>Networking Opportunities</li><li>Others</li></ul>`,
    footer: 'View all highlights',
    image: BlogImage3,
  },
  {
    id: 4,
    title: 'Official Events Organised by ITMA',
    body: `A Showcase of ITMA-Curated Events`,
    content: `Maximise your participation at ITMA 2023 by sharing knowledge and networking with industry leaders, gain insights into the latest trends and developments from exhibitors, researchers, product developers and brand owners.`,
    footer: 'Explore all events',
    image: BlogImage4,
  },
];
interface IBlog {
  data: { id: number; title: string; body: string; content: string; footer: string; image: StaticImageData };
}

const Blog = (props: IBlog) => {
  return (
    <div className="blog-container">
      <div className="blog-content ">
        <div className="blog-icon ">
          <Image src={BlogIcon} alt="icon"/>
          {/* <img src={BlogIcon} /> */}
        </div>
        <div className="what-is-itma ">
          <span className="what-is-itma-text ">{props?.data?.title}</span>
        </div>
        <div className="the-worlds-larg ">
          <span className="the-worlds-larg-text ">{props?.data?.body}</span>
        </div>
        <div className="learn-about-itm ">
          <span className="learn-about-itm-text">{parse(props?.data?.content)}</span>
        </div>
        {props?.data?.footer && (
          <div className="blog-footer ">
            <div className="read-more-about ">
              <span className="read-more-about-text ">{props?.data?.footer}</span>
            </div>
            <div className="footer-arrow  ">
              <div className="arrow-image  pos-init fill-parent image-div bg-contain bg-no-repeat"></div>
            </div>
          </div>
        )}
      </div>
      <div className="blog-image-container ">
        <Image
          src={props?.data?.image}
          className="blog-image image-div bg-no-repeat fill-parent bg-cover nodeBg-872759"
          alt="872759-ALT"
          height="446px"
        />
        {/* <img
          src={props?.data?.image}
          className="blog-image image-div bg-no-repeat fill-parent bg-cover nodeBg-872759"
          alt="872759-ALT"
          height="446px"
        /> */}
      </div>
    </div>
  );
};

export default function AboutItma() {
  return (
    <div id="about-itma" className="blog-parent ">
      
      <div className="blog-list">
        <div className="blog-list-main">
          {data?.map((e) => (
            <Blog key={e?.id} data={e} />
          ))}
        </div>
      </div>
      <div className="blog-dotted-line ">
        <Image src={DottedLine}  alt="image"/>
        {/* <img src={DottedLine}  alt="image"/> */}
      </div>
  </div>
  );
}
