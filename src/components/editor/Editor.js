<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5
import classNames from "classnames";
import { Container, Button } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
<<<<<<< HEAD
const Editor = ({ toggleSidebar,handleInputChange, StateData }) => {
=======
const Editor = ({ toggleSidebar }) => {
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5

    return (

        <Container
            fluid
            className={classNames("editor")}
        >
            <Button onClick={toggleSidebar}>
                <FaChevronRight />
            </Button>
            <span>&nbsp;&nbsp;&nbsp;Editor</span>
            <div className="form-style">
                <Form>

                    <FormGroup row>
                        <Label for="preHeader" sm={2}>PreHeader</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="preheader"
                                id="preheader"
<<<<<<< HEAD
                                placeholder="preheader"
                                onChange={handleInputChange} />
=======
                                placeholder="preheader" />
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </Container>
    );
}

export default Editor;