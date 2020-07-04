import React from "react";
import classNames from "classnames";
import { Container, Button } from "reactstrap";


function ViewComponent({ data }) {
    return <iframe srcdoc={`<p>${data.input1 || ""} ${data.input2 || ""}</p>`} src="demo_iframe_srcdoc.htm"></iframe>

}

export default ViewComponent;