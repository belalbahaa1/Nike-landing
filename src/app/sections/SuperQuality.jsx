import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import shoe8 from "../../../public/shoe8.svg";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      {/* Left Side */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          we provide you
          <span className="text-coral-red"> Super Quality </span>
          Shoe
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          One of the things that sets Nike shoes apart from other brands is
          their use of innovative technologies. For example, Nike Air cushioning
          provides superior shock absorption and support, while Nike Flyknit
          technology creates a lightweight and breathable upper that conforms to
          your foot for a personalized fit.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-1 justify-center items-center">
        <Image
          className="object-contain"
          src={shoe8}
          alt="Super Quality Shoe"
          width={570}
          height={522}
        />
      </div>
    </section>
  );
};

export default SuperQuality;
