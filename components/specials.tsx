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
  specials_item_active: string;
  specials_item_id: string;
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
    fullData = fullData.map((index) => {
      if (index.id === e) {
        return { ...index, open: true };
      }

      return { ...index, open: false };
    });
    settype(fullData.filter((index) => index.id === e)[0]);
  }

  return (
    // <section id="specials" className="specials">
    //   <div className="container" data-aos="fade-up">
    //     <div className="section-title">
    //     </div>
    //   </div>

    //   <div className="SpecailsMain">
    //     <div className="ItemTitles">
    //       {fullData.map((item) => (
    //         <div
    //           className={`${item.open ? "ItemOpen" : "Item"}`}
    //           key={item.specials_item_maintitle}
    //           onClick={() => handleEvent(item.id)}
    //         >
    //           <p {...(item.$?.specials_item_sidetitle as {})}>
    //             {item.specials_item_sidetitle}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="ItemHeader">
    //       <h1 {...(type.$?.specials_item_maintitle as {})}>
    //         {type.specials_item_maintitle && (
    //           <span>{type.specials_item_maintitle}</span>
    //         )}
    //       </h1>
    //     </div>
    //     <div className="ItemDesc">
    //       <p {...(type.$?.special_item_description as {})}>
    //         {type.special_item_description}
    //       </p>
    //     </div>
    //     <div className="ItemMatter">
    //       <p {...(type.$?.specials_item_matter as {})}>
    //         {type.specials_item_matter}
    //       </p>
    //     </div>
    //     <div className="ItemImage">
    //       <img
    //         {...(type.specials_item_image.$?.url as {})}
    //         src={type.specials_item_image.url}
    //         alt={type.specials_item_image.filename}
    //         className="SpecailsImage"
    //       ></img>
    //     </div>
    //   </div>
    // </section>
    <section id="specials" className="specials">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>
            {" "}
            {section.specials_title && <span>{section.specials_title}</span>}
          </h2>
          <p>{section.specials_desc && <span>{section.specials_desc}</span>}</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {fullData.map((item, index) => (
                <li className="nav-item" key={item.specials_item_maintitle}>
                  <a
                    className={`nav-link ${item.specials_item_active}`}
                    data-bs-toggle="tab"
                    href={`#tab-${item.id}`}
                  >
                    {item.specials_item_sidetitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {fullData.map((type) => (
                <div
                  className={`tab-pane ${type.specials_item_active}`}
                  id={`tab-${type.id}`}
                  key={type.id}
                >
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3 {...(type.$?.specials_item_maintitle as {})}>
                        {type.specials_item_maintitle && (
                          <span>{type.specials_item_maintitle}</span>
                        )}
                      </h3>
                      <p
                        className="fst-italic"
                        {...(type.$?.special_item_description as {})}
                      >
                        {type.special_item_description}
                      </p>{" "}
                      <p {...(type.$?.specials_item_matter as {})}>
                        {type.specials_item_matter}
                      </p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        {...(type.specials_item_image.$?.url as {})}
                        src={type.specials_item_image.url}
                        alt={type.specials_item_image.filename}
                        className="SpecailsImage"
                      ></img>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Et blanditiis nemo veritatis excepturi</h3>
                    <p className="fst-italic">
                      Qui laudantium consequatur laborum sit qui ad sapiente
                      dila parde sonata raqer a videna mareta paulona marka
                    </p>
                    <p>
                      Ea ipsum voluptatem consequatur quis est. Illum error
                      ullam omnis quia et reiciendis sunt sunt est. Non aliquid
                      repellendus itaque accusamus eius et velit ipsa
                      voluptates. Optio nesciunt eaque beatae accusamus lerode
                      pakto madirna desera vafle de nideran pal
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                    <p className="fst-italic">
                      Eos voluptatibus quo. Odio similique illum id quidem non
                      enim fuga. Qui natus non sunt dicta dolor et. In
                      asperiores velit quaerat perferendis aut
                    </p>
                    <p>
                      Iure officiis odit rerum. Harum sequi eum illum corrupti
                      culpa veritatis quisquam. Neque necessitatibus illo rerum
                      eum ut. Commodi ipsam minima molestiae sed laboriosam a
                      iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et
                      harum voluptatem optio quae
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>
                      Fuga dolores inventore laboriosam ut est accusamus
                      laboriosam dolore
                    </h3>
                    <p className="fst-italic">
                      Totam aperiam accusamus. Repellat consequuntur iure
                      voluptas iure porro quis delectus
                    </p>
                    <p>
                      Eaque consequuntur consequuntur libero expedita in
                      voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                      debitis quis velit. Eum ex maxime error in consequatur
                      corporis atque. Eligendi asperiores sed qui veritatis
                      aperiam quia a laborum inventore
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>
                      Est eveniet ipsam sindera pad rone matrelat sando reda
                    </h3>
                    <p className="fst-italic">
                      Omnis blanditiis saepe eos autem qui sunt debitis porro
                      quia.
                    </p>
                    <p>
                      Exercitationem nostrum omnis. Ut reiciendis repudiandae
                      minus. Omnis recusandae ut non quam ut quod eius qui.
                      Ipsum quia odit vero atque qui quibusdam amet. Occaecati
                      sed est sint aut vitae molestiae voluptate vel
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      src="assets/img/specials-5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
