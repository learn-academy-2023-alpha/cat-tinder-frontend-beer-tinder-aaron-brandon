import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
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
              <NavLink href="/BeerIndex/">Find New Beers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/BeerReview"> Review Saved Beers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/BeerNew"> Upload A New Beer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://untappd.com/">
                {" "}
                Track Your Beers on Untappd
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
