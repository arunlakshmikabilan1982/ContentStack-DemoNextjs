"use client";
import React, { useState } from "react";

type AdditionalParam = {
  booking_title: string;
  booking_desc: string;
};

type Input = {
  input_name: string;
};

type BookingInputs = {
  input: [Input];
};

type BookingProps = {
  booking_title: string;
  booking_desc: string;
  booking_button: string;
  booking_inputs: BookingInputs;
  $: AdditionalParam;
};

export default function BookingSection({ section }: { section: BookingProps }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          time,
          people,
          message,
        }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
        setPeople("");
        setMessage("");
        setShow(
          "Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!"
        );
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
  console.log(section);
  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{section.booking_title}</h2>
          <p>{section.booking_desc}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          role="form"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder={section.booking_inputs.input[0].input_name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                name="date"
                className="form-control"
                id="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="time"
                id="time"
                placeholder="Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                className="form-control"
                name="people"
                id="people"
                placeholder="# of people"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                data-rule="minlen:1"
                data-msg="Please enter at least 1 chars"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="validate"></div>
          </div>

          <div className="show-message-box">
            {show && <div className="show-message">{show}</div>}
          </div>

          <div className="text-center">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}
