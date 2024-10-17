import React from "react";
import Image from "next/image";
import Logo from '../assets/svg/logo.svg';

export default function Register() {
  return (
    <section id="register" className="register-container ">
    <div className="logo-container ">
      <div className="logo ">
        <div className="logo-image ">
        <Image src={Logo} alt="logo" width="76px" height="85px" />
          {/* <img src={Logo} alt="logo" width="76px" height="85px" /> */}
        </div>
      </div>
      <div className="address-container ">
        <div className="country ">
          <span className="country-text ">MESSAGELANDE HANNOVER</span>
        </div>
        <div className="city ">
          <span className="city-text ">GERMANY</span>
        </div>
        <div className="e_address ">
          <span className="e_address-text ">www.ITMA.com</span>
        </div>
      </div>
    </div>
    <div className="register-container-date register-container-text ">
      <span className="register-container-text ">16 - 22 September 2027</span>
    </div>
   
    <div className="register-now-container ">
      <div className="register-now  register-now-text ">
        Register Now
      </div>
    </div>
    <div className="date-container ">
      <div className="date ">
        <span className="date-text ">16 - 22 September 2027</span>
      </div>
      <div className="calendar-container ">
        <div className="icons--calendar ">
          <div className="combined-shape ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/figma-plugin-a7287.appspot.com/o/user-images%2F15-oct-2024%2Fshivamdubey1728973362115%2Fimage-I87-2418_2511-75721.png?alt=media&token=0"
              className=" pos-init fill-parent bg-contain bg-no-repeat image-div object-fit"
              alt="I872418_251175721-ALT"
            />
          </div>
        </div>
        <div className="add-event-container ">
          <span className="add-event-text ">Add event to Calendar</span>
        </div>
      </div>
    </div>
  </section>
  );
}
