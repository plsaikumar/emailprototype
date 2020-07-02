import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sidebar/SideBar";
import Editor from "./components/editor/Editor";
import Iframe from "./components/iframe/Iframe"
import { Container, Row, Col } from 'reactstrap';
import "./App.css";

const App = () => {
  const [isOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isOpen);
  const [stateData, setData] = useState(() => ({
    preheader: '',
    image: 'https://www.w3schools.com/images/w3schools_green.jpg',
    arrayName: [],
    arrayData: [],
  }));
  const handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setData((state) => ({
      ...state,
      [name]: value,
    }));
  }
  const getImage = (event, data) => {
    const arrayName = [];
    const arrayData = [];
    arrayName.push(event.target.name);
    arrayData.push(data);
    setData((state) => ({
      ...state,
      arrayName,
      arrayData
    }));
  }
  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} getImage={getImage} stateData={stateData} isOpen={isOpen} />

      <Container>
        <Row  >
          <Col xs="6" className="divider">
            <div>
              <Editor
                toggleSidebar={toggleSidebar}
                handleInputChange={handleInputChange} stateData={stateData}
              />

            </div>
          </Col>
          <Col xs="6" >
            <Iframe stateData={stateData} />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default App;