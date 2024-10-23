import React from "react";
import Image, { StaticImageData } from "next/image";
import BlogIcon from '../assets/svg/blog-icon.svg';
import parse from 'html-react-parser';
import DottedLine from '../assets/images/dottedLine.png';
import { Image as imge } from "../typescript/action";

type Links = {
  label?: string;
  title: string;
  href: string;
};

type AboutItmaItem = {
  title: string;
  sub_heading: string;
  description: string;
  image: imge;
  more_link: Links;
};

type AboutItmaProps = {
  items: [AboutItmaItem];
};

export default function AboutItma({ section }: { section: AboutItmaProps }) {
  return (
    <div id="about-itma" className="blog-parent ">     
      <div className="blog-list">
        <div className="blog-list-main">
          {section.items?.map((e, index) => (
            <div className="blog-container">
              <div className="blog-content ">
                <div className="blog-icon ">
                  <Image src={BlogIcon} alt="icon"/>
                  {/* <img src={BlogIcon} /> */}
                </div>
                <div className="what-is-itma ">
                  <span className="what-is-itma-text ">{e?.title}</span>
                </div>
                <div className="the-worlds-larg ">
                  <span className="the-worlds-larg-text ">{e?.sub_heading}</span>
                </div>
                <div className="learn-about-itm ">
                  <span className="learn-about-itm-text">{parse(e?.description)}</span>
                </div>
                {e?.more_link && (
                  <div className="blog-footer ">
                    <div className="read-more-about ">
                      <a href={e?.more_link.href} className="read-more-about-text ">{e?.more_link.title}</a>
                    </div>
                    <div className="footer-arrow  ">
                      <div className="arrow-image  pos-init fill-parent image-div bg-contain bg-no-repeat"></div>
                    </div>
                  </div>
                 )}
              </div>
              <div className="blog-image-container ">
                { <img
                  src={e?.image.url}
                  className="blog-image image-div bg-no-repeat fill-parent bg-cover nodeBg-872759"
                  alt="872759-ALT"
                  height="446px"
                /> }
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blog-dotted-line ">
        { <Image src={DottedLine}  alt="image"/> }
      </div>
    </div>
  );
}
