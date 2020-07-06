import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/sidebar/SideBar";
import Editor from "./components/editor/Editor";
import Iframe from "./components/iframe/Iframe"
import { Container, Row, Col } from 'reactstrap';
import "./App.css";
import { uuid } from "uuidv4";

const arrayList = [
  {
    title: 'PreHeader',
    components: [
      { name: "preheader_1", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
      { name: "preheader_2", image: 'https://pbs.twimg.com/media/DKLdmn8VYAEeUdd.jpg' },
    ]
  },

  {
    title: 'Header',
    components: [
      { name: "header_1", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdfuQvrR-soudN2gPYn9reu60s784LtyCxNw&usqp=CAU' },
      { name: "header_2", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
    ]
  },

  {
    title: 'Header With Logo',
    components: [
      { name: "headerwithlogo_1", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
      { name: "headerwithlogo_2", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
    ]
  },
  {
    title: 'Primaries',
    components: [
      { name: "primaries_1", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
      { name: "primaries_2", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
    ]
  },
  {
    title: 'Secondaries',
    components: [
      { name: "secondaries_1", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
      { name: "secondaries_2", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
    ]
  },
  {
    title: 'Blocks',
    components: [
      { name: "blocks_1", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
      { name: "blocks_2", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
    ]
  },
  {
    title: 'Tertiaries',
    components: [
      { name: "tertiaries_1", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
      { name: "tertiaries_2", image: 'https://vectorlogoseek.com/wp-content/uploads/2019/07/genpact-vector-logo.png' },
    ]
  },

]

const App = () => {
  const [isOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isOpen);
  const [stateData, setData] = useState(() => ({
    selectedComponent: [],
    viewData: {},
    loading: false
  }));

  const handleSelectComponent = (type) => () => {
    const { selectedComponent, viewData } = stateData
    if (!selectedComponent.includes(type)) {
      viewData[type] = { id: uuid() }
      setData({ ...stateData })
    }
    console.log(stateData.selectedComponent,"check handleselect")
  }

  const deleteComponent = (type) => () => {
    console.log(type, "delete comp",stateData.selectedComponent)
    const { selectedComponent } = stateData
    setData({
      ...stateData, selectedComponent: selectedComponent.filter((each) => {
        return type !== each
      })
    })
  }

  const onInputChange = (type) => (e) => {
    const { name, value } = e.target;
    console.log(name, value, 'check name , value');
    const { viewData } = stateData;
    viewData[type][name] = value;
    setData({ ...stateData })
  }
  const imageUpload = (type) => (e) => {
    const { viewData } = stateData
    e.preventDefault();
    let file = e.target.files[0];
    if (!file) {
      return;
    }
    if (!file.type.includes("image")) {
      alert("Upload Valid File")
      return;
    }
    viewData[type]['imageUrl'] = URL.createObjectURL(file);
    viewData[type]['imageFile'] = file
    setData({ ...stateData })
  };
  const selectedComponents = Object.keys(stateData.viewData);
  return (
    <div className="App">
      <SideBar handleSelectComponent={handleSelectComponent} stateData={stateData} isOpen={isOpen} arrayList={arrayList} />
      {console.log(stateData.selectedComponent)}
      <Container>
        <Row  >
          <Col xs="6" className="divider">
            <div>
              <Editor
                toggleSidebar={toggleSidebar}
                selectedComponent={selectedComponents || []}
                data={stateData.viewData}
                handleInputChange={onInputChange} stateData={stateData}
                deleteComponent={deleteComponent}
                imageUpload={imageUpload}
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