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
<<<<<<< HEAD
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
=======

  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} isOpen={isOpen} />
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5

      <Container>
        <Row  >
          <Col xs="6" className="divider">
            <div>
              <Editor
                toggleSidebar={toggleSidebar}
<<<<<<< HEAD
                handleInputChange={handleInputChange} stateData={stateData}
=======

>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5
              />

            </div>
          </Col>
          <Col xs="6" >
<<<<<<< HEAD
            <Iframe stateData={stateData} />
=======
            <Iframe />
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5
          </Col>
        </Row>

      </Container>
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5
