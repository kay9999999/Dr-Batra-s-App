import React from "react";

// Example components

import Banner from "./Banner";
import BelowBannerSection from "./BelowBannerSection";

const HomePage = () => {
  return (
    <div>
      {/* BANNER SECTION */}
      <Banner />

      {/* SECTION BELOW BANNER */}
      <BelowBannerSection />
    </div>
  );
};

export default HomePage;
