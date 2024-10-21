import React from "react";
import Image from "next/image";
import Logo from '../assets/svg/logo.svg';

type JoinItmaProps = {
  join_itma_title: string;
  join_itma_description: string;
  email_address_placeholder_text: string;
  join_mailing_button_text: string;
};

export default function JoinItma({section} : {section: JoinItmaProps}) {
  return (
    <div id="join-itma" >
      <div className="join-itma-a">
        <div className="join-the-itmane ">
          <span className="join-the-itmane-872763-0 ">{section?.join_itma_title}</span>
        </div>
        <div className="be-a-part-of-th ">
          <span className="be-a-part-of-th-872764-0 ">
            {section?.join_itma_description}
          </span>
        </div>
        <div className="join-itma-input">
          <form >
            <input name="email" type="text" className="join-itma-email" placeholder={section?.email_address_placeholder_text} />
            <div className="join-itma-list">
              <span>{section.join_mailing_button_text}</span>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
