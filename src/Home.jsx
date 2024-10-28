import React from "react";
import Common from "./Common";
import web from "./images/—Pngtree—cartoon business villain working at_3819197.png";
const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgSrc={web}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
