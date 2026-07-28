import React from "react";
import Trending from "./Trending";
import Popular from "./Popular";
import Toprated from "./Toprated";
import Footer from "../../Login/Footer";

const SecondaryContainer = () => {
  return (
    <section className="relative bg-black ">
      <Trending />
      <Popular />
      <Toprated />
      <Footer />
    </section>
  );
};

export default SecondaryContainer;
