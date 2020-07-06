import React from "react";
import { get } from 'lodash'

function ViewComponent({ data }) {
    console.log(data)
    return <iframe srcdoc={`<div><p>${get(data, 'preheader_1.preheader_1_input_1', '')} <br /> ${get(data, 'preheader_1.preheader_1_input_2', '')}</p>
    <p>${get(data, 'preheader_2.preheader_2_input_1', '')} <br /> ${get(data, 'preheader_2.preheader_2_input_2', '')}</p>
    <img src=${get(data, 'header_1.imageUrl', '')}/>
    </div>`

    } src="demo_iframe_srcdoc.htm"></iframe>


}

export default ViewComponent;