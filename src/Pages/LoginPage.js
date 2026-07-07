import React from "react";
import Header from "../Components/Login/Header";
import Login from "../Components/Login/Login";
import Footer from "../Components/Login/Footer";
import { BACKGROUND } from "../Utils/constant";

const LoginPage = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <img
          src={BACKGROUND}
          alt="Netflix Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Lighter Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>

        <Header />

        <div className="relative z-10 flex justify-center items-center min-h-screen px-6 py-24">
          <Login />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
