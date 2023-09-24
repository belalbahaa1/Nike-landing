import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navLinks } from "../constants";

const Nav = () => {
  //* Done
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src="/header-logo.svg" width={130} height={30} alt="logo" />
        </Link>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-600 transition-all duration-150 dark:text-white bg-coral-red p-2 rounded-sm"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden cursor-pointer max-lg:block">
          <Image src="/hamburger.svg" width={25} height={25} alt="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
