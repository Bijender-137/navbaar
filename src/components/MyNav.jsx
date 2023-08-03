import React, { useState } from "react";
import Logo from "../assets/img/png/Logo.png";
import { Container } from "react-bootstrap";
import Victor from "../assets/img/svg/Vector.svg";
import { Children } from "react";
import { Link } from "react-router-dom";
const MyNav = ({
  allpages,
  bg_clr,
  works,
  drop,
  text_clr,
  margin,
  children,
  a,
}) => {
  const childarray = Children.toArray(children);
  const [Show, setShow] = useState(true);
  function checkShow() {
    setShow(!Show);
  }
  if (Show) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <section className={`${bg_clr}`}>
        <nav className={`py-4 ${margin}`}>
          <Container>
            <div className="d-flex align-items-center justify-content-between text-center">
              <a href="#">
                <img src={Logo} alt="Logo" />
              </a>
              <ul
                className={
                  Show
                    ? "p-0 m-0 d-flex align-items-center d-none d-xl-flex nav-menu "
                    : "p-0 m-0 d-flex align-items-center gap-4 d-xl-flex nav-menu active"
                }
              >
                <Link to="/" className="fw-normal fs_16 text-white">
                  Home
                  <img className="ms-2" src={Victor} alt="Victor" />
                </Link>
                <Link
                  to="/About"
                  className="ps-xl-4 ms-xl-2 fw-normal fs_16 text-white"
                >
                  About <img className="ms-2" src={Victor} alt="Victor" />
                </Link>
                <Link
                  to="/Project"
                  className="ps-xl-4 ms-xl-2 fw-normal fs_16 text-white"
                >
                  Work <img className="ms-2" src={Victor} alt="Victor" />
                </Link>
                <li>{childarray[0]}</li>
                <li>{childarray[a]}</li>
                <div className="ps-xl-5 ms-xl-5">
                  <button className="fw_5 text-white fs_16 bg-transparent btn_border">
                    Cart
                  </button>
                </div>
                <div className="ps-xl-3 ms-xl-1">
                  <button className={`fw_5 fs_16 btn_border_2 ${text_clr}`}>
                    All Pages
                  </button>
                </div>
              </ul>
              <button
               onClick={checkShow}
                className="d-xl-none border-0 bg-transparent hamburger"
              >
                <div className="bar"></div>
                <div className="bar my-2"></div>
                <div className="bar"></div>
              </button>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
};

export default MyNav;
