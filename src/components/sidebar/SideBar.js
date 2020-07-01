import React from "react";

import { NavItem, NavLink, Collapse, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SideBarMenu from "./SideBarMenu";



const SideBar = ({ isOpen, toggle }) => {

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>

      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <br /> <br />

          <SideBarMenu title="PreHeader" />
          <SideBarMenu title="Header" />
          <SideBarMenu title="Header With Logo" />
          <SideBarMenu title="Primaries" />
          <SideBarMenu title="Secondaries" />
          <SideBarMenu title="Blocks" />
          <SideBarMenu title="Tertiaries" />

        </Nav>
      </div>
    </div>
  );
};

export default SideBar;
