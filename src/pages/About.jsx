import React from "react";
// import MyNav from '../components/about/Hero'
import Victor from "../assets/img/svg/Vector.svg";
import MyNav from "../components/MyNav";
const About = () => {
  return (
    <>
      <MyNav bg_clr="bg-dark" allpages="All pages" drop={Victor}>
        <li className="text-white ps-xl-4 ms-xl-2">
          <a href="#"  className="fw-normal fs_16 text-white">
            all pages
            <img className="ms-2" src={Victor} alt="Victor" />
          </a>
        </li>
        
      </MyNav>
    </>
  );
};

export default About;
