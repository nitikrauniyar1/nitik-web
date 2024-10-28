import React from "react";
import Common from "./Common";
import web from "./images/3026238.jpg"
const About = () => {
  return (
    <>
      <Common 
        name=" Welcome To About With"
        imgSrc={web}
        visit="/contact"
        btnName="Contact Us"
      />
    </>
  );
};

export default About;
