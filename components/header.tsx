import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, Router  } from "next/router";
import parse from "html-react-parser";
import Tooltip from "./tool-tip";
import { onEntryChange } from "../contentstack-sdk";
import { getHeaderRes } from "../helper";
import Skeleton from "react-loading-skeleton";
import { HeaderProps, Entry, NavLinks } from "../typescript/layout";
import {ChangeEvent, ReactNode, useTransition} from 'react';
import getConfig from 'next/config';

export default function Header({
  header,
  entries,
}: {
  header: HeaderProps;
  entries: Entry;
}) {
  const router = useRouter();
  const [getHeader, setHeader] = useState(header);
  const [selected, setSelected] = useState('');


  const [isPending, startTransition] = useTransition();
  console.log("Router:",router.locale);
  const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;
const host = envConfig.HOST;
  function buildNavigation(ent: Entry, hd: HeaderProps) {
    let newHeader = { ...hd };
    if (ent.length !== newHeader.navigation_menu.length) {
      ent.forEach((entry) => {
        const hFound = newHeader?.navigation_menu.find(
          (navLink: NavLinks) => navLink.label === entry.title
        );
        if (!hFound) {
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
    const newpath = ("http://localhost:3000"+locale+router.asPath);
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

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      {/* <div className="note-div">
        {headerData?.notification_bar.show_announcement ? (
          typeof headerData.notification_bar.announcement_text === "string" && (
            <div {...(headerData.notification_bar.$?.announcement_text as {})}>
              {parse(headerData.notification_bar.announcement_text)}
            </div>
          )
        ) : (
          <Skeleton />
        )}
      </div> */}
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <div className="logo me-auto me-lg-0">
          {headerData ? (
            <Link href="/">
              <a className="logo me-auto me-lg-0" title="Contentstack">
                <img
                  className="logo"
                  src={headerData.logo.url}
                  alt={headerData.title}
                  title={headerData.title}
                  {...(headerData.logo.$?.url as {})}
                />
              </a>
            </Link>
          ) : (
            <Skeleton width={150} />
          )}
        </div>
        {/* <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label> */}
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul className="nav-ul header-ul">
            {headerData ? (
              headerData.navigation_menu.map((list) => {
                const className =
                  router.asPath === list.page_reference[0].url ? "active" : "";
                return (
                  <li
                    key={list.label}
                    className="nav-li"
                  >
                    <Link className={className} href={router?.locale+list?.page_reference[0]?.url}>
                      {list.label}
                    </Link>
                  </li>
                );
              })
            ) : (
              <Skeleton width={300} />
            )}
            <li className="dropdown">
            <select value={selected} className="form-select language-switch" aria-label="Default select example" onChange={onSelectChange}>
            <option value="">Choose Language</option>
            <option value="/en-us">English</option>
            <option value="/zh-cn">Chinese</option>
            </select>
            </li>
          </ul>
          
        </nav>
        {headerData
          ? headerData?.call_to_action.map((action) => {
              return (
                <a
                  key={action.title}
                  href={action?.href}
                  className="book-a-table-btn scrollto d-none d-lg-flex"
                >
                  {action?.title}
                </a>
              );
            })
          : ""}

        {/* <div className="json-preview">
          <Tooltip
            content="JSON Preview"
            direction="top"
            dynamic={false}
            delay={200}
            status={0}
          >
            <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <img src="/json.svg" alt="JSON Preview icon" />
            </span>
          </Tooltip>
        </div> */}
      </div>
    </header>
  );
}
