import React, { useState } from "react";
import classNames from "classnames";
import { Container, Button } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
const Editor = ({ toggleSidebar,handleInputChange, StateData }) => {

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
                                placeholder="preheader"
                                onChange={handleInputChange} />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </Container>
    );
}

export default Editor;