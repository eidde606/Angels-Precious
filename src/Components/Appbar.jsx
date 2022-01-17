import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./AppbarElements";

const Appbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activestyle>
            About
          </NavLink>
          <NavLink to="/specials" activestyle>
            Specials
          </NavLink>
          <NavLink to="/services" activestyle>
            Services
          </NavLink>
          <NavLink to="/book-online" activestyle>
            Book Online
          </NavLink>
          <NavLink to="/contact-us" activestyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activestyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Appbar;
