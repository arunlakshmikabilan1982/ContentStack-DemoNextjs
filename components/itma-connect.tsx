import React from "react";
import Link from "next/link";
import { Image, Action } from "../typescript/action";
import { useState } from "react";
  
  type ITMAConnectProps = {
    title: string;
    heading: string;
    description: string;
    image: Image;
  };

  export default function ITMAConnect({ section }: { section: ITMAConnectProps }) {
    return (
      <div id = "itma-connect">
      <p style={{color: "black"}}>{section?.title}</p>
      <p style={{color: "black"}}>{section?.heading}</p>
      <p style={{color: "black"}}>{section?.description}</p>
      <img
            src={section?.image.url}
            className=""
            alt=""
          />
      </div>
    );
  }