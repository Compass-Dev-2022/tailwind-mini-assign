import React from "react";
import PriceCard from "./price-card.component";
import { CONTENT } from "../../contents";

const PriceCardLists = () => {
  return (
    <div className="flex flex-col mt-10 md:flex md:flex-row md:items-center md:justify-center gap-x-10 md:px-10 xl:flex">
      {CONTENT.priceCardA.map((e) => (
        <PriceCard
          text={e.text}
          key={e.id}
          index={e.id}
          preText={e.preText}
          contentA={e.contentA}
          buttonText={e.buttonText}
          desc={e.desc}
        />
      ))}
    </div>
  );
};

export default PriceCardLists;
