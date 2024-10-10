import React, { useEffect, useState } from "react";
import { Image } from "../typescript/action";

type MenuItems = {
  menu_item: [CNXMenuItem];
};

type MenuTag = {
  menu_tag_name: string;
};

type MenuTags = {
  menu_tag: [MenuTag];
};

type CNXMenuItem = {
  menu_item_title: string;
  menu_item_desc: string;
  menu_item_price: string;
  menu_item_image: Image;
  menu_item_tags: string;
};

type MenuProps = {
  menu_title: string;
  menu_desc: string;
  menu_items: MenuItems;
  menu_tags: MenuTags;
};

export default function MenuSection({ section }: { section: MenuProps }) {
  const [tag, setTag] = useState("All");
  const [items, setItems] = useState(section?.menu_items?.menu_item);

  useEffect(() => {
    let data:any = section?.menu_items?.menu_item.filter((item) =>
      item.menu_item_tags.includes(tag)
    );
    setItems(data);
  }, [tag]);

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 {...(section.menu_title as {})}>{section.menu_title}</h2>
          <p {...(section.menu_desc as {})}>{section.menu_desc}</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              {section.menu_tags.menu_tag.map((tag) => {
                return (
                  <li
                    className="filter"
                    key={tag.menu_tag_name}
                    onClick={() => setTag(tag.menu_tag_name)}
                    {...(tag.menu_tag_name as {})}
                  >
                    {tag.menu_tag_name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div
          className="row menu-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {items.map((item) => {
            return (
              <div
                className={`col-lg-6 menu-item filter-${item.menu_item_tags}`}
                key={item.menu_item_title}
              >
                <img
                  {...(item.menu_item_image.$?.url as {})}
                  src={item.menu_item_image.url}
                  className="menu-img"
                  alt=""
                />
                <div className="menu-content">
                  <a href="#" {...(item.menu_item_title as {})}>
                    {item.menu_item_title}
                  </a>
                  <span {...(item.menu_item_price as {})}>
                    ${item.menu_item_price}
                  </span>
                </div>
                <div
                  className="menu-ingredients"
                  {...(item.menu_item_desc as {})}
                >
                  ${item.menu_item_desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
