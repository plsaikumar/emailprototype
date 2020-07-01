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

  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} isOpen={isOpen} />

      <Container>
        <Row  >
          <Col xs="6" className="divider">
            <div>
              <Editor
                toggleSidebar={toggleSidebar}

              />

            </div>
          </Col>
          <Col xs="6" >
            <Iframe />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default App;
