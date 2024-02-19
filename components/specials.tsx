"use client";
import React, { useState } from "react";
import { Image } from "../typescript/action";

type AdditionalParam = {
  specials_item_sidetitle: string;
  specials_item_maintitle: string;
  special_item_description: string;
  specials_item_matter: string;
  specials_item_image: Image;
};

type Specails_Item = {
  specials_item_sidetitle: string;
  specials_item_maintitle: string;
  special_item_description: string;
  specials_item_matter: string;
  specials_item_image: Image;
  $: AdditionalParam;
};

type Specail_Item_Types = {
  specials_item: [Specails_Item];
};

type SpecialsProps = {
  specials_title: string;
  specials_desc: string;
  specials_item_types: Specail_Item_Types;
};

export default function SpecialsSection({
  section,
}: {
  section: SpecialsProps;
}) {
  let fullData = section.specials_item_types.specials_item.map(
    (item, index) => {
      if (index == 0) {
        return { ...item, id: index, open: true };
      }
      return { ...item, id: index, open: false };
    }
  );

  const [type, settype] = useState(fullData[0]);

  function handleEvent(e: number) {
    console.log(fullData);
    fullData = fullData.map((index) => {
      if (index.id === e) {
        return { ...index, open: true };
      }

      return { ...index, open: false };
    });
    console.log(fullData);
    settype(fullData.filter((index) => index.id === e)[0]);
    console.log(type);
  }

  return (
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>
            {" "}
            {section.specials_title && <span>{section.specials_title}</span>}
          </h2>
          <p>{section.specials_desc && <span>{section.specials_desc}</span>}</p>
        </div>
      </div>

      <div className="SpecailsMain">
        <div className="ItemTitles">
          {fullData.map((item) => (
            <div
              className={`${item.open ? "ItemOpen" : "Item"}`}
              key={item.specials_item_maintitle}
              onClick={() => handleEvent(item.id)}
            >
              <p {...(item.$?.specials_item_sidetitle as {})}>
                {item.specials_item_sidetitle}
              </p>
            </div>
          ))}
        </div>
        <div className="ItemHeader">
          <h1 {...(type.$?.specials_item_maintitle as {})}>
            {type.specials_item_maintitle && (
              <span>{type.specials_item_maintitle}</span>
            )}
          </h1>
        </div>
        <div className="ItemDesc">
          <p {...(type.$?.special_item_description as {})}>
            {type.special_item_description}
          </p>
        </div>
        <div className="ItemMatter">
          <p {...(type.$?.specials_item_matter as {})}>
            {type.specials_item_matter}
          </p>
        </div>
        <div className="ItemImage">
          <img
            {...(type.specials_item_image.$?.url as {})}
            src={type.specials_item_image.url}
            alt={type.specials_item_image.filename}
            className="SpecailsImage"
          ></img>
        </div>
      </div>
    </section>
  );
}
