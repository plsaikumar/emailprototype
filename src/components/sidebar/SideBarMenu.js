import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarMenu = ({ arrayList, stateData, getImage }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const renderData = () => {
    return (
      arrayList.map((data, i) => (
        <div>
          {stateData.htmlData}
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
              <img src={data.image} alt="W3Schools.com" styles={{ width: '104px', height: '142px' }}
                name={data} onClick={(event) => { getImage(event, data, stateData.image) }}></img>
            </NavItem>
          </Collapse>
        </div>)))

  }
  return (
    <div>
      {(renderData())}

    </div>
  );
};

export default SideBarMenu;