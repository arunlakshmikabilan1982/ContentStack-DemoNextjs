import React, { useState } from "react";
import Link from "next/link";
import { Image } from "../typescript/action";

type contactus_content = {
  contactus_item_title: string;
  contactus_item_desc: string;
  contactus_item_image: [Image];
  $: AdditionalParam;
};

type contactus_Contents = {
  contactus_item: [contactus_content];
};

type ContactUsProps = {
  contactus_title: string;
  contactus_desc: string;
  contactus_content: contactus_Contents;
  form_button: string;
  $: AdditionalParam;
};

type AdditionalParam = {
  contactus_title: string;
  contactus_desc: string;
  contactus_item_title: string;
  contactus_item_desc: string;
  contactus_item_image: [Image];
  form_button: string;
};

export default function ContactUsSection({
  section,
}: {
  section: ContactUsProps;
}) {
  // Example of fetching data from the API endpoint

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, text, message }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setText("");
        setMessage("");
        setShow("Message sent Successfull");
        setTimeout(() => {
          setShow("");
        }, 3000);

        console.log("Data sent successfully");
      } else {
        // Handle error response
        console.error("Failed to send data");

        setShow("Try Again");
        setTimeout(() => {
          setShow("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 {...(section.$?.contactus_title as {})}>
            {section.contactus_title}
          </h2>
          <p {...(section.$?.contactus_desc as {})}>{section.contactus_desc}</p>
        </div>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              {section.contactus_content &&
                section.contactus_content.contactus_item.map((item) => {
                  return (
                    <div className="address" key={item.contactus_item_title}>
                      <div className="address_image_box">
                        <img
                          {...(item.contactus_item_image.$?.url as {})}
                          className="address_image"
                          src={item.contactus_item_image.url}
                        ></img>
                      </div>
                      <div>
                        <h4 {...(item.$?.contactus_item_title as {})}>
                          {item.contactus_item_title}
                        </h4>
                        <p {...(item.$?.contactus_item_desc as {})}>
                          {item.contactus_item_desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={8}
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="show-message-box">
                {show && <div className="show-message">{show}</div>}
              </div>

              <div className="text-center">
                <button type="submit" {...(section.$?.form_button as {})}>
                  {section.form_button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
