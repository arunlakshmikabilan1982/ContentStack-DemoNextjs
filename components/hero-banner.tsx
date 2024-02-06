import React from 'react';
import Link from 'next/link';
import { Image, Action } from "../typescript/action";

type AdditionalParam = {
  banner_title: string;
  banner_description: string;
}

type Banner = {
  bg_color: string;
  text_color: string;
  banner_title: string;
  banner_description: string;
  call_to_action: Action;
  call_to_action_2:Action;
  banner_image: Image;
  $: AdditionalParam;
}

type BannerProps = {
  banner: Banner;
}

export default function HeroBanner(props: BannerProps) {

  const banner = props.banner;

  return (
   
<div>
<section id="hero" className="d-flex align-items-center"
style={{
  background: `url(${banner.banner_image.url})`,   
}}>
  <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
    <div className="row">
      <div className="col-lg-8">
      {banner.banner_title && (
          <h1 className='hero-title' {...banner.$?.banner_title as {}}>
            {banner.banner_title}
          </h1>
        )}
         {banner.banner_description ? (
          <p
            className='hero-description '
            {...banner.$?.banner_description as {}}
          >
            {banner?.banner_description}
          </p>
        ) : (
          ''
        )}

        <div className="btns">
        {banner.call_to_action.title && banner.call_to_action.href ? (
          <Link href={banner?.call_to_action.href}>
            <a className='btn-book animated fadeInUp scrollto' {...banner.call_to_action.$?.title}>
              {banner?.call_to_action.title}
            </a>
          </Link>
        ) : (
          ''
        )}
         {banner.call_to_action_2.title && banner.call_to_action_2.href ? (
          <Link href={banner?.call_to_action_2.href}>
            <a className='btn-book animated fadeInUp scrollto' {...banner.call_to_action_2.$?.title}>
              {banner?.call_to_action_2.title}
            </a>
          </Link>
        ) : (
          ''
        )}
        </div>
      </div>

    </div>
  </div>
</section>
</div>
  );
}
