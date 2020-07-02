import React from "react";

import { NavItem, NavLink, Collapse, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SideBarMenu from "./SideBarMenu";

const arrayList = [
  { "name": 'PreHeader', 'image': 'https://www.w3schools.com/images/w3schools_green.jpg' },
  { 'name': 'Header', 'image': 'https://www.w3schools.com/images/w3schools_green.jpg' },
  { 'name': 'Header With Logo', 'image': 'https://www.w3schools.com/images/w3schools_green.jpg' },
  { 'name': 'Primaries', 'image': 'https://www.w3schools.com/images/w3schools_green.jpg' },
  { 'name': 'Secondaries', 'image': 'https://www.w3schools.com/images/w3schools_green.jpg' },
  { 'name': 'Blocks', 'image': 'https://www.w3schools.com/images/w3schools_green.jpg' },
  { 'name': 'Tertiaries', 'image': 'https://www.w3schools.com/images/w3schools_green.jpg' }]


const SideBar = ({ isOpen, toggle, stateData, getImage }) => {

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>

      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <br /> <br />

          <SideBarMenu arrayList={arrayList} stateData={stateData} getImage={getImage} />


        </Nav>
      </div>
    </div>
  );
};

export default SideBar;