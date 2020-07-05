import React from "react";

import {  Nav } from "reactstrap";
import classNames from "classnames";

import SideBarMenu from "./SideBarMenu";





/* const arrayList = [
  { name: 'PreHeader', image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
  { name: 'Header', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdfuQvrR-soudN2gPYn9reu60s784LtyCxNw&usqp=CAU' },
  { name: 'Header With Logo', image: 'https://pbs.twimg.com/media/DKLdmn8VYAEeUdd.jpg' },
  { name: 'Primaries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSuwkkRh8k3dzX38fEXbTnZv63K3CURnk_rw&usqp=CAU' },
  { name: 'Secondaries', image: 'https://pbs.twimg.com/media/DKLdmn8VYAEeUdd.jpg' },
  { name: 'Blocks', image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
  { name: 'Tertiaries', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdfuQvrR-soudN2gPYn9reu60s784LtyCxNw&usqp=CAU ' }]
 */

const SideBar = ({ isOpen, stateData, handleSelectComponent ,arrayList }) => {

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>

      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <br /> <br />

          {arrayList.map(data => {
            return (
              <SideBarMenu handleSelectComponent={handleSelectComponent} data={data} stateData={stateData}  />
            )
          })
          }

        </Nav>
      </div>
    </div>
  );
};

export default SideBar;