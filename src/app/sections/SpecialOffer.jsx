import Image from "next/image";
import React from "react";
import offer from "../../../public/offer.svg";
import Button from "../components/Button";
import arrowRight from "../../../public/arrow-right.svg";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-lg:flex-col-reverse gap-10 max-container">
      {/* left Side */}
      <div className="flex flex-1">
        <Image
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer Shoe
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          For a limited time, we are offering a special discount on all shoes!
          Get 20% off your purchase of any shoes in our store. This offer is
          valid on all brands and styles, including running shoes, basketball
          shoes, training shoes, casual shoes, and more.
        </p>
        <div className="mt-11 flex flex-wrap gap-8">
          <Button label="View Details" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            textColor="text-slate-gray"
            backgroundColor="bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
