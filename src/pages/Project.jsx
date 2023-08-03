import React from "react";
import Victor from "../assets/img/svg/Vector.svg";
import MyNav from "../components/MyNav";
const Project = () => {
  return (
    <>
      <MyNav
        // allpages="Projects"
        // drop={Victor}
        bg_clr="bg-success"
        text_clr="text-success"
        a="2"
      >
   
        <li className="ms-xl-4 ps-xl-2">
          <a href="#" className="fw-normal fs_16 text-white">
            Project <img className="ms-2" src={Victor} alt="Victor" />
          </a>
        </li>
      </MyNav>
    </>
  );
};

export default Project;
