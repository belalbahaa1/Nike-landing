import Image from "next/image";
import React from "react";

//* Done
const Button = ({ label, iconUrl, textColor, backgroundColor, fullWidth }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full border-coral-red
      
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor}`
          : "bg-coral-red text-white "
      }     
      
      ${fullWidth && "w-full"}
      
      
      `}
    >
      {label}
      {iconUrl && (
        <Image
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          width={25}
          height={25}
          alt="icon"
        />
      )}
    </button>
  );
};

export default Button;
