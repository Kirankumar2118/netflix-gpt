import React from "react";
import { LOGO } from "../../Utils/constant";

const Header = () => {
  return (
    <div className="absolute px-32 py-1 ">
      <img className="w-48" src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
