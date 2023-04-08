import React from "react";
import PriceIntro from "../components/price-intro/price-intro.component";
import PriceCardLists from "../components/price-card/price-card-list.component";

const HomePage = () => {
  return (
    <div>
      {" "}
      <PriceIntro />
      <PriceCardLists />
    </div>
  );
};

export default HomePage;
