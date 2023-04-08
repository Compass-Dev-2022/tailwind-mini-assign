import React from "react";
import { CONTENT } from "../../contents";

const PriceIntro = () => {
  return (
    <div className="p-5 w-full md:w-[70%] md:mx-auto xl:w-[50%]">
      <p className="font-bold text-24 md:text-20 md:text-center">
        {CONTENT.priceIntro.title}
      </p>
      <p className="text-12 md:text-center">{CONTENT.priceIntro.desc}</p>
    </div>
  );
};

export default PriceIntro;
