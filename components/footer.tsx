import React from "react";
import { FooterProps } from "../typescript/layout";

export default function Footer({
  footerSection
}: {
  footerSection: FooterProps;
}) {
  return (
    <footer id="footer">
      <div className="footer-parent ">
        <div className="footer-a ">
          <div className="footer-logo-container ">
            <div className="footer-logo-name ">
              <img src={footerSection?.logo?.url} alt="logo" width="38px" height="32px" />
              <span className="itma-2027">{footerSection?.title}</span>
            </div>
            <span className="followus">{footerSection?.social.social_share_title}</span>
            <div className="footericons">
              {footerSection?.social.social_share.map((share) => {
                return (
                  <a href={share.link.href}>
                    <img src={share.icon.url} alt={share.link.title} width="32px" height="32px" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">{footerSection?.about_us.heading}</span>
            </div>
            <div className="menu-a-content ">
              {footerSection?.about_us.link.map((linkData) => {
                return (
                  <div className="about-itma-872809 ">
                    <a className="about-itma-872809-0 " href={linkData.href}>{linkData.title}</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">{footerSection?.exhibitors_visitors.heading}</span>
            </div>
            <div className="menu-a-content ">
              {footerSection?.exhibitors_visitors.link.map((linkData) => {
                return (
                  <div className="about-itma-872809 ">
                    <a className="about-itma-872809-0 " href={linkData.href}>{linkData.title}</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">{footerSection?.media_resources.heading}</span>
            </div>
            <div className="menu-a-content ">
              {footerSection?.media_resources.link.map((linkData) => {
                return (
                  <div className="about-itma-872809 ">
                    <a className="about-itma-872809-0 " href={linkData.href}>{linkData.title}</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer-menu-a ">
            <div className="about-us ">
              <span className="about-us-0 ">{footerSection?.support.heading}</span>
            </div>
            <div className="menu-a-content ">
              {footerSection?.support.link.map((linkData) => {
                return (
                  <div className="about-itma-872809 ">
                    <a className="about-itma-872809-0 " href={linkData.href}>{linkData.title}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="footer-b ">
          <div className="footer-b-content">
            {footerSection?.other_navigation.link.map((linkData) => {
              return (
                <div className="privacy-notice-872832 ">
                  <a href={linkData.href} className="privacy-notice-872832-0 ">{linkData.title}</a>
                </div>
              );
            })}
          </div>
          <div className="copyright-footer ">
            <span className="copyright--2021-872839-0 ">
              {footerSection?.copyright}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}