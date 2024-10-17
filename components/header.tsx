import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, Router } from "next/router";
import parse from "html-react-parser";
import Tooltip from "./tool-tip";
import { onEntryChange } from "../contentstack-sdk";
import { getHeaderRes } from "../helper";
import Skeleton from "react-loading-skeleton";
import { HeaderProps, Entry, NavLinks } from "../typescript/layout";
import { ChangeEvent, ReactNode, useTransition } from "react";
import getConfig from "next/config";
import Logo from '../assets/svg/logo.svg';
import UserLogo from '../assets/svg/user-logo.svg';
import Image from "next/image";

export default function Header({
  header,
  entries,
}: {
  header: HeaderProps;
  entries: Entry;
}) {
  const router = useRouter();
  const currentUrl = useRouter().pathname;
  const [getHeader, setHeader] = useState(header);
  const [selected, setSelected] = useState("");

  const [isPending, startTransition] = useTransition();
  console.log("Router:", router.locale);
  console.log(currentUrl);
  const { publicRuntimeConfig } = getConfig();
  const envConfig = process.env.CONTENTSTACK_API_KEY
    ? process.env
    : publicRuntimeConfig;
  const host = envConfig.NEXTAUTH_URL;
  function buildNavigation(ent: Entry, hd: HeaderProps) {
    let newHeader = { ...hd };
    if (ent.length !== newHeader.navigation_menu.length) {
      ent.forEach((entry) => {
        const hFound = newHeader?.navigation_menu.find(
          (navLink: NavLinks) => navLink.label === entry.title
        );
        if (hFound) {
          newHeader.navigation_menu?.push({
            label: entry.title,
            page_reference: [
              { title: entry.title, url: entry.url, $: entry.$ },
            ],
            $: {},
          });
        }
      });
    }
    return newHeader;
  }
  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value;

    startTransition(() => {
      const newpath = window.location.protocol +"//"+ window.location.host + locale + router.asPath;
      // alert(newpath);
      window.location.href = newpath;
      setSelected(event.target.value);
    });
  }
  async function fetchData() {
    try {
      if (header && entries) {
        const headerRes = await getHeaderRes();
        const newHeader = buildNavigation(entries, headerRes);
        setHeader(newHeader);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function ReloadPage() {
    window.location.reload();
  }
  useEffect(() => {
    if (header && entries) {
      onEntryChange(() => fetchData());
    }
  }, [header]);
  const headerData = getHeader ? getHeader : undefined;
console.log("headerData.logo:", headerData?.logo.url)
  return (
    <header  className="d-flex flex-column align-items-center">
        <section className="header_container">
          <div className="logo_container">
            <a title='Contentstack'>
            <img
              src={headerData.logo.url}
              alt={headerData.title}
              title={headerData.title}
              {...headerData.logo.$?.url as {}}
            />
          </a>
          </div>
        <div className="searchbox align-items-center">
          <input className="searchbox-input" type="text"></input>
          <div className="search-anything-text pos-abs">
            <span className="search-anything-0 ">Search anything</span>
          </div>
          <div className="search-icon pos-abs">
            <div className="icon-color pos-abs">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F15-oct-2024%2Fshivamdubey1728973362115%2Fimage-87-2371.png?alt=media&token=0"
                className="pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div object-fit"
                alt="872371-ALT"
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-center gap-2">
            <span className="login-text ">Login</span>
            <Image src={UserLogo} alt="Login-logo" />
        </div>
      </section>

      <section className="menu-bar d-flex flex-row align-items-center">
        <div className="about-itma ">
          <span className="about-itma-text ">About ITMA</span>
        </div>
        <div className="exibitors ">
          <span className="exibitors-text ">Exibitors</span>
        </div>
        <div className="visitors ">
          <span className="visitors-text ">Visitors</span>
        </div>
        <div className="media ">
          <span className="media-text ">Media</span>
        </div>
        <div className="menu-bar-events ">
          <span className="menu-bar-events-text ">Events</span>
        </div>
        <div className="plan-your-trip ">
          <span className="plan-your-trip-text ">Plan your Trip</span>
        </div>
        <div className="itma-blog ">
          <span className="itma-blog-text ">ITMA Blog</span>
        </div>
        <div className="itma-connect ">
          <span className="itma-connect-text ">ITMA Connect</span>
        </div>
        <div className="help-center ">
          <span className="help-center-text ">Help Center</span>
        </div>
      </section>
    </header>
  );
}
