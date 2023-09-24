import Image from "next/image";
import Link from "next/link";
import React from "react";
import footerLogo from "../../../public/footer-logo.svg";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="padding-x bg-black padding-t pb-8 ">
      <div className="flex justify-between  items-center gap-20 flex-wrap">
        <Link href="/">
          <Image src={footerLogo} width={130} height={30} alt="logo" />
        </Link>
        <p className="mt-8 text-white-400 font-montserrat capitalize leading-8 sm:max-w-md">
          get shoes ready for the new term at at your nearest store. Find your
          perfect size in store. get rewards.
        </p>
        <div className="flex gap-5 items-center mt-8">
          {socialMedia.map((icon, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center rounded-full w-12 h-12 bg-white"
            >
              <Link href={icon.href} target="_blank">
                <Image src={icon.src} width={24} height={24} alt={icon.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
