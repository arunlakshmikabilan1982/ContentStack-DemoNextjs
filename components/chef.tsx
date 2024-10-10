"use client";
import React, { useState } from "react";
import { Image } from "../typescript/action";

type AdditionalParam = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  html_code: string;
  designation: string;
  name: string;
};

type Chef_Items = {
    chef_name: string;
    chef_role: string;
    chef_twitter: string;
    chef_instagram: string;
    chef_linkedin: string;
    chef_facebook: string;
    chef_pic: Image;
  $: AdditionalParam;
};

type ChefProps = {
  chef_title: string;
  chef_description: string;
  chef_items: [Chef_Items];
};

export default function ChefSection({
  section,
}: {
  section: ChefProps;
}){

 
//console.log(section);
  return (
   <section id="chefs" className="chefs">   
    <div className="container aos-init aos-animate" data-aos="fade-up">

    <div className="section-title">
    <h2>
                {" "}
                {section.chef_title && <span>{section.chef_title}</span>}
            </h2>
            <p>{section.chef_description && <span>{section.chef_description}</span>}</p>
    </div>

    <div className="row">
    {section.chef_items.map(item => (

    <div key={item.chef_name} className="col-lg-4 col-md-6">
        <div className="member aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
        <img
                {...(item.chef_pic.$?.url as {})}
                src={item?.chef_pic.url}
                alt={item?.chef_pic.filename}
                className="ChefImage"
            ></img>
        <div className="member-info">
            <div className="member-info-content">
            <h4 {...(item.chef_name as {})}>
                    {item.chef_name}</h4>
            <span {...(item.chef_role as {})}>
                    {item.chef_role}</span>
            </div>
            <div className="social">
            <a href=""><i className="bi bi-twitter"></i></a>
            </div>
        </div> 
        </div>
    </div>
    ))}
    </div>

    </div>
  </section>
    );
}
