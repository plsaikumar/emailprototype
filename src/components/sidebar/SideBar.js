import React from "react";

import { NavItem, NavLink, Collapse, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SideBarMenu from "./SideBarMenu";

<<<<<<< HEAD
const arrayList = ['PreHeader', 'Header', 'Header With Logo', 'Primaries', 'Secondaries', 'Blocks', 'Tertiaries']

const SideBar = ({ isOpen, toggle, stateData, getImage }) => {
=======


const SideBar = ({ isOpen, toggle }) => {
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>

      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <br /> <br />

<<<<<<< HEAD
          <SideBarMenu title={arrayList} stateData={stateData} getImage={getImage} />

=======
          <SideBarMenu title="PreHeader" />
          <SideBarMenu title="Header" />
          <SideBarMenu title="Header With Logo" />
          <SideBarMenu title="Primaries" />
          <SideBarMenu title="Secondaries" />
          <SideBarMenu title="Blocks" />
          <SideBarMenu title="Tertiaries" />
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5

        </Nav>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default SideBar;
=======
export default SideBar;
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5
