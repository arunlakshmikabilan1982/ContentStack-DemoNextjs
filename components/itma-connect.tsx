import React from "react";
import Link from "next/link";
import { Image as ImageType, Action } from "../typescript/action";
import { useState } from "react";
import BlogIcon from '../assets/svg/blog-icon.svg';
import Image from "next/image";

  type ITMAConnectProps = {
    title: string;
    heading: string;
    description: string;
    image: ImageType;
  };

  export default function ITMAConnect({ section }: { section: ITMAConnectProps }) {
    return (
      <section id="itma-connect">
           <div className="connect-text">
            <div className="connect-icon">
              <Image src={BlogIcon} alt="logo" width="16px" height="24px"/>
              {/* <img src={BlogIcon} /> */}
            </div>
            <div className="connect-title">
              <span  className="connect-title-text">{section?.title}</span>
            </div>
            <div className="connect-heading">
              <span  className="connect-heading-text">{section?.heading}</span>
            </div>
            <div className="connect-description">
              <span  className="connect-description-text">{section?.description}</span>
            </div>
          </div>
          <div className="connect-image-container">
            <div className="connect-image">
              <img
                src={section?.image.url}
                className="image-div bg-no-repeat fill-parent bg-cover nodeBg-872716"
                alt=""
              />
            </div>
            <div className="connect-firrplay-icon">
              <div className="connect-vector">
                <div
                  className="connect-nodeBg fill-parent image-div bg-contain bg-no-repeat"
                ></div>
              </div>
            </div>
          </div>
          <div className="connect-learn-more">
            <span className="connect-learn-more-text ">Learn More</span>
          </div>
      </section>
    );
  }