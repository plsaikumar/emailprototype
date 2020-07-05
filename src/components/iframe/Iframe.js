import React from "react";

function ViewComponent({ data }) {
    console.log(data)
     return <iframe srcdoc={`<p>${data.input1 || ""} <br /> ${data.input2 || ""}</p>`}  src="demo_iframe_srcdoc.htm"></iframe>


}

export default ViewComponent;