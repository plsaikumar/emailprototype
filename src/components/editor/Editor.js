import React, { useState } from "react";
import classNames from "classnames";
import { Container, Button } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import InputComponents from '../inputcomponents/input_components'

const Editor = ({ toggleSidebar, handleInputChange, stateData, selectedComponent, deleteComponent }) => {

    return (

        <Container
            fluid
            className={classNames("editor")}
        >
            <Button onClick={toggleSidebar}>
                <FaChevronRight />
            </Button>
            <span>&nbsp;&nbsp;&nbsp;Editor</span>
            {selectedComponent.map((type) => {
                return <InputComponents type={type} handleInputChange={handleInputChange} deleteComponent={deleteComponent} />
            })}

        </Container>
    );
}

export default Editor;