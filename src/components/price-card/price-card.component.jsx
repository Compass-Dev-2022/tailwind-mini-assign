import React from "react";
import { FiCheck } from "react-icons/fi";
const PriceCard = ({ text, preText, contentA, buttonText, desc }) => {
  return (
    <div
      className={`w-[56%] md:max-w-[150px] xl:max-w-[200px] mx-auto md:mx-0 bg-primary text-secondary rounded-10 border border-accent border-opacity-40 p-5 md:p- xl:p-5 mb-20  ${
        text === "Free" && `order-2 md:order-1`
      } ${text === "Best" && `shadow-customShadw order-1 md:order-2`}  ${
        text === "Medium" && `order-3`
      } ${text === "Fair" && `order-4`}`}
    >
      <p className="text-12 text-accent text-opacity-60">{preText}</p>
      <p className="text-30 md:text-20 xl:text-30 font-bold text-accent leading-[2rem]">
        {text}
      </p>
      <ul className="my-10 md:my-5 xl:my-10">
        {contentA.map((e) => (
          <li className="flex items-center gap-x-2 text-16">
            <FiCheck className="text-accent text-opacity-40" key={e} /> {e}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-1 border border-accent border-opacity-40 text-accent font-bold rounded-4 ${
          text === "Best" && "bg-accent text-white"
        }`}
      >
        {buttonText}
      </button>
      <p className="mt-2 text-opacity-50 text-9 text-seo">{desc}</p>
    </div>
  );
};

export default PriceCard;
