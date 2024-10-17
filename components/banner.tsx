import { useState } from "react";
import { Image } from "../typescript/action";

type BannerProps = {
  banner_text_left: string;
  banner_text_right: string;
  banner_image_left: Image;
  banner_image_right: Image;
};

export default function Banner({ section }: { section: BannerProps }) {
  const [getBanner, setBanner] = useState(section);

  return (
    <section id="banner">
      <div className="banner-container "></div>
      <div className="cocreating-text ">
        <span className="cocreating-text-a ">
          {getBanner?.banner_text_left}
        </span>
        <span className="cocreating-text-b ">
          {getBanner?.banner_text_right}
        </span>
      </div>

      <section className="banner-image-container ">
        <div className="handhuman-image ">
          <img
            src={section?.banner_image_left.url}
            className=" image-div bg-no-repeat fill-parent bg-cover nodeBg-872382"
            alt="872382-ALT"
          />
        </div>
        <div className="handrobot-image ">
          <img
            src={section?.banner_image_right.url}
            className=" image-div bg-no-repeat fill-parent bg-cover nodeBg-872381"
            alt="872381-ALT"
          />
        </div>
      </section>
    </section>
  );
}
