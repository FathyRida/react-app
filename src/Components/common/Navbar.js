import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
// NavLink Component allow su to add some styling to the Link nav tag
const ListItem = styled.ul`
  padding: 2px;
  margin: 0;
  height: 40px;

  > li {
    list-style: none;
    display: inline-block;
    margin: 10px;
  }
  > li:hover {
    color: white !important;
    border-bottom: 1px solid white;
  }
  > li > a {
    text-decoration: none;
    color: white !important;
    cursor: pointer;
    background: transparent;
  }
`;

const LinkItem = styled.li`
  > .active {
    border-bottom: 2px solid whitesmoke !important;
  }
`;

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          React Demo
        </a>
        <ListItem>
          <LinkItem>
            <NavLink exact to="/">
              Home
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink exact to="/products">
              Products
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink exact to="/#">
              Settings
            </NavLink>
          </LinkItem>
        </ListItem>
      </nav>
    </div>
  );
};

export default Navbar;
