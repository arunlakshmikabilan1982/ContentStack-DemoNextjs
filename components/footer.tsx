import React, { useState, useEffect } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import { onEntryChange } from "../contentstack-sdk";
import { getFooterRes } from "../helper";
import Skeleton from "react-loading-skeleton";
import { FooterProps, Entry, Links } from "../typescript/layout";
import Image from "next/image";
import LogoFooter from "../assets/images/logo-footer.png";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import linkedin from "../assets/svg/Linkedin.svg";
import twitter from "../assets/svg/twitter.svg";
import wechat from "../assets/svg/wechat.svg";
import youtube from "../assets/svg/Youtube.svg";

export default function Footer({
  footer,
  entries,
}: {
  footer: FooterProps;
  entries: Entry;
}) {
  const [getFooter, setFooter] = useState(footer);

  function buildNavigation(ent: Entry, ft: FooterProps) {
    let newFooter = { ...ft };
    if (ent.length !== newFooter.navigation.link.length) {
      ent.forEach((entry) => {
        const fFound = newFooter?.navigation.link.find(
          (nlink: Links) => nlink.title === entry.title
        );
        if (!fFound) {
          newFooter.navigation.link?.push({
            title: entry.title,
            href: entry.url,
            $: entry.$,
          });
        }
      });
    }
    return newFooter;
  }

  async function fetchData() {
    try {
      if (footer && entries) {
        const footerRes = await getFooterRes();
        const newfooter = buildNavigation(entries, footerRes);
        setFooter(newfooter);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, [footer]);

  const footerData = getFooter ? getFooter : undefined;

  return (
    <footer id="footer">
      <div className="footer-parent ">
        <div className="footer-a ">
          <div className="footer-logo-container ">
            <div className="footer-logo-name ">
              <Image src={LogoFooter} alt="logo" width="38px" height="32px" />
              <span className="itma-2027">ITMA 2027</span>
            </div>
            <span className="followus">Follow US</span>
            <div className="footericons">
              <Image src={facebook} alt="logo" width="32px" height="32px" />
              <Image src={instagram} alt="logo" width="32px" height="32px" />
              <Image src={linkedin} alt="logo" width="32px" height="32px" />
              <Image src={twitter} alt="logo" width="32px" height="32px" />
              <Image src={wechat} alt="logo" width="32px" height="32px" />
              <Image src={youtube} alt="logo" width="32px" height="32px" />
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">About Us</span>
            </div>
            <div className="menu-a-content ">
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">About ITMA</span>
              </div>
              <div className="events-872810 ">
                <span className="events-872810-0 ">Events</span>
              </div>
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">Exhibitors & Visitors</span>
            </div>
            <div className="menu-a-content ">
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Exhibitors</span>
              </div>
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Visitors</span>
              </div>
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Plan Your Trip</span>
              </div>
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">Media & Resources</span>
            </div>
            <div className="menu-a-content ">
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Media</span>
              </div>
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Media Gallery</span>
              </div>
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">ITMA Blog</span>
              </div>
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">ITMA Connect</span>
              </div>
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Resources</span>
              </div>
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">Support</span>
            </div>
            <div className="menu-a-content ">
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Help Centre</span>
              </div>
              <div className="about-itma-872809 ">
                <span className="about-itma-872809-0 ">Contact Us</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-b ">
          <div className="footer-b-content">
            <div className="privacy-notice-872832 ">
              <span className="privacy-notice-872832-0 ">Privacy Notice </span>
            </div>
            <div className="cookies-setting-872834 ">
              <span className="cookies-setting-872834-0 ">Cookies Settings</span>
            </div>
            <div className="terms-of-use-872836 ">
              <span className="terms-of-use-872836-0 ">Terms of Use</span>
            </div>
            <div className="feedback-872838 ">
              <span className="feedback-872838-0 ">Feedback</span>
            </div>
          </div>
          <div className="copyright-footer ">
            <span className="copyright--2021-872839-0 ">
              Copyright © 2021 ITMA Services. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

