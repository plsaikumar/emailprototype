import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
const SideBarMenu = ({ arrayList, stateData, getImage }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  return (
    <div>
      < NavItem
        onClick={toggle}
        className={classNames({ "menu-open": !collapsed })}
      >
        <NavLink className="dropdown-toggle">
          {arrayList.name}
        </NavLink>
      </NavItem >
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
        <NavItem className="pl-4 mb-1">
          <img src={arrayList.image} alt="W3Schools.com" styles={{ width: '104px', height: '142px' }}
            name={arrayList.name} onClick={(event) => { getImage(event, arrayList, stateData.image) }}></img>
        </NavItem>
      </Collapse>
    </div>
  );
};

export default SideBarMenu;
