import React from "react";
import Head from "../Components/Header/Head";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import Maincontainer from "../Components/browse/maincontainer/Maincontainer";
import Secondaryconatiner from "../Components/browse/Secondarycontainer/Secondarycontainer";

const BrowsePage = () => {
  useNowplayingmovies();
  return (
    <div>
      <Head />
      <Maincontainer />
      <Secondaryconatiner />
    </div>
  );
};

export default BrowsePage;
