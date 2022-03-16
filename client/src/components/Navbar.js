import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../assets/logo_white.png")} alt="logo" height="120px" width="200px" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/post" activeStyle>
            Post
          </NavLink>
          <NavLink to="/Profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/create" activeStyle>
            Create
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
