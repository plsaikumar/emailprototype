import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink, Button } from "reactstrap";

const SideBarMenu = ({ data, handleSelectComponent }) => {
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
            {data.title}
          </NavLink>
        </NavItem >
        <Collapse
          isOpen={!collapsed}
          navbar
          className={classNames("items-menu", { "mb-1": !collapsed })}
        >
         {data.components.map(res=> {
            return(
              <NavItem className="pl-4 mb-1">
              <img src={res.image} alt="genpact" width="200"
                name={res} ></img>
              <Button color="primary" size="sm" onClick={handleSelectComponent(res.name)}>Add {res.name}</Button>
            </NavItem>
            )
           
          })} 

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