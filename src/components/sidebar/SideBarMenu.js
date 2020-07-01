import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const {  title, items } = props;

  return (
    <div>
      <NavItem
        onClick={toggle}
        className={classNames({ "menu-open": !collapsed })}
      >
        <NavLink className="dropdown-toggle">
         {title}
        </NavLink>
      </NavItem>
      <Collapse
        isOpen={!collapsed}
        navbar
        className={classNames("items-menu", { "mb-1": !collapsed })}
      >
          <NavItem  className="pl-4 mb-1">
              {title}
          </NavItem>
      </Collapse>
    </div>
  );
};

export default SideBarMenu;
