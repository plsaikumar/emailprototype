import React from "react";

import { NavItem, NavLink, Collapse, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SideBarMenu from "./SideBarMenu";

const arrayList = ['PreHeader', 'Header', 'Header With Logo', 'Primaries', 'Secondaries', 'Blocks', 'Tertiaries']

const SideBar = ({ isOpen, toggle, stateData, getImage }) => {

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>

      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <br /> <br />

          <SideBarMenu title={arrayList} stateData={stateData} getImage={getImage} />


        </Nav>
      </div>
    </div>
  );
};

export default SideBar;