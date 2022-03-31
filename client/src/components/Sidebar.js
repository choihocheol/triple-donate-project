import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/swap" onClick={toggle}>
            Swap
          </SidebarLink>
          <SidebarLink to="/post" onClick={toggle}>
            Post
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/login">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
