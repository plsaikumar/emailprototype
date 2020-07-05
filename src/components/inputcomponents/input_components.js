import React from 'react';
import { Input, Label, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function InputComponents(props) {
    const { type, deleteComponent, handleInputChange, stateData } = props
    const returnComponent = (inputType) => {
        switch (inputType) {
            case 'preheader_1': return <div>
                <Col>
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}}  style={{cursor:"pointer"}} style={{cursor:"pointer"}} onClick={deleteComponent('preheader_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input placeholder="PreHeader " name="input1" onChange={handleInputChange} />
                    <Input placeholder="View Online" name="input2" onChange={handleInputChange} />
                </Col>
            </div>
            case 'preheader_2': return <div>
                <Col>
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('preheader_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input placeholder="PreHeader " name="input1" onChange={handleInputChange} /><br />
                    <Input placeholder="View Online" name="input2" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'header_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('header_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Header Data" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'header_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('header_2')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Header Data" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'headerwithlogo_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }} >Header With Logo</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('headerwithlogo_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input type="file" /><br />
                </Col>
            </div>
            case 'headerwithlogo_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }} >Header With Logo</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('headerwithlogo_2')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input type="file" /><br />
                </Col>
            </div>
            case 'primaries_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Primaries</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('primaries_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>

                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange} /><br />
                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'primaries_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Primaries</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('primaries_2')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>

                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange} /><br />
                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'secondaries_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('secondaries_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Secondaries" name="input1" onChange={handleInputChange} /><br />
                </Col>
            </div>
            case 'secondaries_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash}  style={{cursor:"pointer"}} onClick={deleteComponent('secondaries_2')} sm={4} /> <br />
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