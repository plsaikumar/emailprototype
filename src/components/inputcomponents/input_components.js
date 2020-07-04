import React from 'react';
import { Input, Label, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function InputComponents(props) {
    const { type, deleteComponent, handleInputChange } = props
    const returnComponent = (inputType) => {
        switch (inputType) {
            case 'PreHeader': return <div>
                <Col >
                    <Label for="preHeader" sm={{ size: 7, offset: 1 }}  >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash} onClick={deleteComponent('PreHeader')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input placeholder="PreHeader " name="input1" onChange={handleInputChange} /><br />
                    <Input placeholder="View Online" name="input2" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'Header': return <div>
                <Col >
                    <Label for="Header" sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash} onClick={deleteComponent('Header')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Header Data" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'Header With Logo': return <div>
                <Col >
                    <Label for="Header With Logo" sm={{ size: 7, offset: 1 }} >Header With Logo</Label>
                    <FontAwesomeIcon icon={faTrash} onClick={deleteComponent('Header With Logo')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input type="file" /><br />
                </Col>
            </div>
            case 'Primaries': return <div>
                <Col >
                    <Label for="Primaries" sm={{ size: 7, offset: 1 }}    >Primaries</Label>
                    <FontAwesomeIcon icon={faTrash} onClick={deleteComponent('Primaries')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    
                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange} /><br />
                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'Secondaries': return <div>
                <Col >
                    <Label for="Secondaries" sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash} onClick={deleteComponent('Secondaries')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Secondaries" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>

            default:
                return null
        }
    }

    return <div>
        {returnComponent(type)}
    </div>
}

export default InputComponents