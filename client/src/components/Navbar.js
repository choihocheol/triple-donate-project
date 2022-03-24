import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../assets/logo_white.png")}
            alt="logo"
            height="120px"
            width="200px"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/post">Post</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
