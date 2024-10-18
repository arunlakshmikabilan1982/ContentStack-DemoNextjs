import React from "react";
import Image from "next/image";
import Logo from '../assets/svg/logo.svg';

export default function JoinItma() {
  return (
    <div id="join-itma" >
      <div className="join-itma-a">
        <div className="join-the-itmane ">
          <span className="join-the-itmane-872763-0 ">Join the ITMAnetwork</span>
        </div>
        <div className="be-a-part-of-th ">
          <span className="be-a-part-of-th-872764-0 ">
            Be a part of the ITMAnetwork and stay up-to-date with news and developments in ITMA and the textile
            and garment industry.
          </span>
        </div>
        <div className="join-itma-input">
          <form >
            <input name="email" type="text" className="join-itma-email" placeholder="Enter your email Address" />
            <div className="join-itma-list">
              <span>Join Mailing List</span>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
