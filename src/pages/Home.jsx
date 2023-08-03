import React from 'react'
// import MyNav from '../components/home/Hero'
import Victor from "../assets/img/svg/Vector.svg";
 import MyNav from "../components/MyNav";
import Newform from '../components/Newform';
const Home = () => {
  return (
      <>
        <MyNav bg_clr="bg-danger" text_clr="text-danger">
      <li className="ms-xl-4 ps-xl-2">
          <a href="#" className="fw-normal fs_16 text-white">
            All pages <img className="ms-2" src={Victor} alt="Victor" />
          </a>
        </li>
        <li className="ms-xl-4 ps-xl-2">
          <a href="#" className="fw-normal fs_16 text-white">
            Work <img className="ms-2" src={Victor} alt="Victor" />
          </a>
        </li>
      </MyNav>
      <Newform/>
      </>
  )
}

export default Home