import React from 'react';
import { Input, Label, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function InputComponents(props) {
    const { type, deleteComponent, handleInputChange, data, imageUpload } = props
    const returnComponent = (inputType) => {
        switch (inputType) {
            case 'preheader_1': return <div>
                <Col>
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} style={{ cursor: "pointer" }} style={{ cursor: "pointer" }} onClick={deleteComponent('preheader_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
                        
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {

                            console.log('Focus.', editor);

                        }}
                    />

                    {/* <Input placeholder="PreHeader " name="preheader_1_input_1" onChange={handleInputChange(type)} /> */}
                    <Input placeholder="View Online" name="preheader_1_input_2" onChange={handleInputChange(type)} />
                </Col>
            </div>
            case 'preheader_2': return <div>
                <Col>
                    <Label sm={{ size: 7, offset: 1 }}    >PreHeader</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('preheader_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input placeholder="PreHeader " name="preheader_2_input_1" onChange={handleInputChange(type)} /><br />
                    <Input placeholder="View Online" name="preheader_2_input_2" onChange={handleInputChange(type)} /><br />
                </Col>
            </div>
            case 'header_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Header</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('header_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" onChange={imageUpload(type)} /><br />
                    <Input placeholder="Header Data" name="input1" onChange={handleInputChange(type)} /><br />
                </Col>
            </div>
            case 'header_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Header</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('header_2')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Header Data" name="input1" onChange={handleInputChange(type)} /><br />
                </Col>
            </div>
            case 'headerwithlogo_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }} >Header With Logo</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('headerwithlogo_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input type="file" /><br />
                </Col>
            </div>
            case 'headerwithlogo_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }} >Header With Logo</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('headerwithlogo_2')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input type="file" /><br />
                </Col>
            </div>
            case 'primaries_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Primaries</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('primaries_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>

                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange(type)} /><br />
                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange(type)} /><br />
                </Col>
            </div>
            case 'primaries_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Primaries</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('primaries_2')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>

                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange(type)} /><br />
                    <Input placeholder="Primaries" name="input1" onChange={handleInputChange(type)} /><br />
                </Col>
            </div>
            case 'secondaries_1': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Secondaries</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('secondaries_1')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Secondaries" name="input1" onChange={handleInputChange(type)} /><br />
                </Col>
            </div>
            case 'secondaries_2': return <div>
                <Col >
                    <Label sm={{ size: 7, offset: 1 }}    >Secondaries</Label>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} onClick={deleteComponent('secondaries_2')} sm={4} /> <br />
                </Col>
                <Col sm={{ size: 11, offset: 1 }}>
                    <Input type="file" /><br />
                    <Input placeholder="Secondaries" name="input1" onChange={handleInputChange(type)} /><br />
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