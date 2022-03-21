import React from "react";
import Homedetails from "./Homedetails";
import Disclamer from "./Disclamer";
import Owners from "./Owners";

const Homecontents = () => {
  return (
    <div>
      <Homedetails className="home__details" />
      <Disclamer />
      <Owners />
    </div>
  );
};

export default Homecontents;
