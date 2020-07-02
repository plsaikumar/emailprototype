import React, { useState } from "react";
import classNames from "classnames";
import { Container, Button } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
const Editor = ({ toggleSidebar, handleInputChange, stateData }) => {

    return (

        <Container
            fluid
            className={classNames("editor")}
        >
            <Button onClick={toggleSidebar}>
                <FaChevronRight />
            </Button>
            <span>&nbsp;&nbsp;&nbsp;Editor</span>
            {stateData && stateData.arrayData.map((data, i) => (
                <div className="form-style">
                    <Form>

                        <FormGroup row>
                            <Label for="preHeader" sm={2}>{data.name}</Label>
                            <Col sm={10}>
                                <Input
                                    type="text"
                                    name={data.name}
                                    id={data.name}
                                    value={stateData.name}
                                    placeholder={data.name}
                                    onChange={handleInputChange} />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>))}
        </Container>
    );
}

export default Editor;