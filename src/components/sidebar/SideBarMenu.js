import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarMenu = ({ data, stateData, getImage, handleSelectComponent }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const renderData = () => {
    return (
      <div>
        < NavItem
          onClick={toggle}
          className={classNames({ "menu-open": !collapsed })
          }
        >
          <NavLink className="dropdown-toggle">
            {data.name}
          </NavLink>
        </NavItem >
        <Collapse
          isOpen={!collapsed}
          navbar
          className={classNames("items-menu", { "mb-1": !collapsed })}
        >
          <NavItem className="pl-4 mb-1">
            <img src={data.image} alt="genpact" width="200"
              name={data} ></img>
            <Button color="primary" size="sm" onClick={handleSelectComponent(data.name)}>Add {data.name}</Button>
          </NavItem>
        </Collapse>
      </div>
    )
  }
  return (
    <div>
      {(renderData())}

    </div>
  );
};

export default SideBarMenu;