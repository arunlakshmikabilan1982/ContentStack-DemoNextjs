import React from 'react';
import Link from 'next/link';
import { Image } from "../typescript/action";
  
type GalleryImages = {
    image: [Image];
  }
  
type GalleryProps = {
    title_h2: string;
    description: string;
    galleryimages: GalleryImages;
  }

export default function GalleryImagesSection({ section }: {section: GalleryProps}) {
  return (
<section id="gallery" className="gallery">
<div className="container" data-aos="fade-up">
  <div className="section-title">
    <h2> {section.title_h2 && (
           <span>{section.title_h2}</span>
        )}</h2>
    <p>{section.description && (
          <span>{section.description}</span>
        )}</p>
  </div>
</div>

<div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

  <div className="row g-0">
  
  {section.galleryimages?.image.map((imageItem, index) => (
          <div className='col-lg-3 col-md-4' key={index}>
            <div className="gallery-item">
            {imageItem && (
              <a href={imageItem.url} className="gallery-lightbox" data-gall="gallery-item">
              <img
                {...imageItem.$?.url as {}}
                src={imageItem.url}
                alt='Gallery Image'
                className="img-fluid"
              />
              </a>
            )}
            </div>
          </div>
  ))}
     </div>
    </div>
</section>
  );
}
