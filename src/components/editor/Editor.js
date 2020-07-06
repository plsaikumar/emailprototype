import React, { useState } from "react";
import classNames from "classnames";
import { Container, Button, Collapse, NavItem, NavLink, Col, Label } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import InputComponents from '../inputcomponents/input_components';
const Editor = ({ data, toggleSidebar, stateData, handleInputChange,imageUpload, deleteComponent }) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const selectedComponents = Object.keys(data)
    return (
        <Container
            fluid
            className={classNames("editor")}
        >
            <Button onClick={toggleSidebar}>
                <FaChevronRight />
            </Button>
            <span>&nbsp;&nbsp;&nbsp;Editor</span>
            {selectedComponents.map((type) => {

                return (
                    <InputComponents data={data[type]} imageUpload={imageUpload} type={type} handleInputChange={handleInputChange} deleteComponent={deleteComponent} />
                    // <div>
                    //     <Button onClick={toggle} style={{ backgroundColor: "white", color: "black", alignContent: "left" }} sm={{ size: 2 }} block>{type}

                    //         <FontAwesomeIcon icon={faTrash} onClick={deleteComponent(type)} sm={{ size: 2, offset: 1 }} />
                    //     </Button>
                    //     <Collapse
                    //         isOpen={!collapsed}
                    //         navbar
                    //         className={classNames("items-menu", { "mb-1": !collapsed })}
                    //     >
                    //         <InputComponents type={type} stateData={stateData} handleInputChange={handleInputChange} deleteComponent={deleteComponent} />

                    //     </Collapse>

                    // </div>
                )
            })}
        </Container>
    );
}

export default Editor;