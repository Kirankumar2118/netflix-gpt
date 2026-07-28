import React from "react";
import Head from "../Components/Header/Head";
import Maincontainer from "../Components/browse/maincontainer/Maincontainer";
import SecondaryContainer from "../Components/browse/Secondarycontainer/Secondarycontainer";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";

const BrowsePage = () => {
  useNowplayingmovies();

  return (
    <main className="min-h-screen bg-black">
      <Head />

      {/* Hero Section */}
      <Maincontainer />

      {/* Movie Sections */}
      <SecondaryContainer />
    </main>
  );
};

export default BrowsePage;
