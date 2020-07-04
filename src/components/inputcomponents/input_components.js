import React from 'react';

function InputComponents(props) {
    const { type, deleteComponent, handleInputChange } = props
    const returnComponent = (inputType) => {
        switch (inputType) {
            case 'PreHeader': return <div>
                <input placeholder="input1" name="input1" onChange={handleInputChange} />
                <input placeholder="input2" name="input2" onChange={handleInputChange} />
                <button onClick={deleteComponent('PreHeader')}>delete</button>
            </div>
            case 'Header': return <div>
                <input type='file' />
                <input placeholder="input1" />
                <button onClick={deleteComponent('Header')}>delete</button>
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