import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Nav,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import BeerLogo from "../assets/BeerLogo.png";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div id="header">
      <Navbar color="faded" light className="nav-bar">
        <NavbarBrand href="/"> 🍺 Welcome To Beer Tinder 🍺</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="nav-items">
            <NavItem>
              <NavLink to="/BeerIndex/">Find New Beers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/BeerReview"> Review Saved Beers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/BeerNew"> Upload A New Beer</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
