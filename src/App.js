import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sidebar/SideBar";
import Editor from "./components/editor/Editor";
import Iframe from "./components/iframe/Iframe"
import Data from "./components/editor/Data"
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
    selectedComponent: [],
    viewData: {}
  }));

  const handleSelectComponent = (type) => () => {
    const { selectedComponent } = stateData
    if (!selectedComponent.includes(type) || type === 'Header') {
      setData({ ...stateData, selectedComponent: [...selectedComponent, type] })
    }
  }

  const deleteComponent = (type) => () => {
    const { selectedComponent } = stateData
    setData({
      ...stateData, selectedComponent: selectedComponent.filter((each) => {
        return type !== each
      })
    })
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, 'check name , value');
    const { viewData } = stateData;
    viewData[name] = value;
    setData({ ...stateData })
  }

  const handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    setData((state) => ({
      ...state,
      [name]: value,
    }));
  }
  const getImage = (event, data, image) => {
    const { name } = event.target.name;
    console.log("event.target.name", event.target.name)
    setData((state) => ({
      ...state,
      arrayName: [...stateData.arrayName, data],
      arrayData: [...stateData.arrayData, data]
    }));
  }

  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} handleSelectComponent={handleSelectComponent} getImage={getImage} stateData={stateData} isOpen={isOpen} />

      <Container>
        <Row  >
          <Col xs="6" className="divider">
            <div>
              <Editor
                toggleSidebar={toggleSidebar}
                selectedComponent={stateData.selectedComponent || []}
                handleInputChange={onInputChange} stateData={stateData}
                deleteComponent={deleteComponent}
              />

            </div>
          </Col>
          <Col xs="6" >
            <Iframe data={stateData.viewData} />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default App;