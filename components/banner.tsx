import React from "react";
import Link from "next/link";
import { Image, Action } from "../typescript/action";



export default function Banner() {

  return (
    <section id="banner">
      <div className="banner-container pos-abs1"></div>
      <div className="cocreating-text pos-abs1">
        <span className="cocreating-text-a ">Co-Creating the </span>
        <span className="cocreating-text-b ">Future of Textiles</span>
      </div>

      <section className="banner-image-container pos-abs1">
        <div className="handhuman-image ">
          <img
            src="https://s3-alpha-sig.figma.com/img/2058/95b9/36a679f736bffe04c10fad3917e0f612?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFnwz7DZLoHXhOhnOMU99oaKcFMHax3qKr6Qeq5O7RuXtklFUc0FCoh8FmLYF-OWTnkdrKFuOKH7DeJk-X47X3fHcez23lDfu6ROyzcovbWFhPuJZ99L6aLKBCAcA4rhws2qeX~ItKQivvL5NXlnb~5b1Tv6cKaE3tFnOtXSGLHPtfvXpznoR2iG8Vo3p3IylY06DNIC5VHWuYIR7qj1m0yaMFIP~ZN3zX2A~IA9rYsOwZnnLwaZflnkg5q50IduNbq~q32nDv3fNZ2ZkpG5Tpxn0NgyFz~yVnm9DAsvbzl5nbRxRTcUYwTXfdEkQfv7rhTd-KdMydc6EOXHpDANig__"
            className="pos-abs1 image-div bg-no-repeat fill-parent bg-cover nodeBg-872382"
            alt="872382-ALT"
          />
        </div>
        <div className="handrobot-image ">
          <img
            src="https://s3-alpha-sig.figma.com/img/3510/8165/6948de9fb16bd2cc793da81a586b0b39?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJCfSRFGCynp37g4K5n8MOmiAF09i1G8Z-VivhBDP0DG8BUY321CGC1m1-iVV5v8hOMHPkyCtGmv2VCAhsxiMTYhy98~ANiD56KUnZtT3IrqjwF6432ylY-UHT1V6pN5eXMfDd3PBJzR2mpPfSRDFTBMDT8awXr3pJAPl5ty1YJ1KEQIf41oRfWE05wLuiuaK4j346y8tZY7NSXxowizixdM7OqzdXcUgGKTYWT8Fr4psXgIWd74gpY5nGbCf3Lg0iZJWkdiTgPCu6ECt~38xC1VPmYdEptvXgZiVfpz-3YZ47CqFyZHbtKxQFZGvs--9u~YykPkR4oBOU2fXZySJA__"
            className="pos-abs1 image-div bg-no-repeat fill-parent bg-cover nodeBg-872381"
            alt="872381-ALT"
          />
        </div>
      </section>
    </section>
  );
}
