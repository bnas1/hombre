import React from "react";
import "../App.css";
import logo from "./logo.png";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="logo">
        <p>
          APPELEZ-NOUS <br />
          (+216) 21 337 442
        </p>
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
        <div className="logoo">
          <CgProfile size={25} />
          <CiHeart size={25} />
          <CiShoppingCart size={25} />
        </div>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="colliers" className="nav-link">
              COLLIERS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="boucles" className="nav-link">
              BOUCLES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="bracelets" className="nav-link">
              BRACELETS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="gourmettes" className="nav-link">
              GOURMETTES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="bagues" className="nav-link">
              BAGUES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="montres" className="nav-link">
              MONTRES
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
