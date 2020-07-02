import React from "react";
import classNames from "classnames";
import { Container ,Button} from "reactstrap";


const Iframe = ({ stateData }) => {

const iframe = '<iframe src="https://www.exmaple.com/show?data..." width="540" height="450"></iframe>' ;

return (<Container
        className={classNames("editor")}
    >
     <div dangerouslySetInnerHTML={{ __html: iframe }} />
      <span> {stateData.preheader}</span>


    </Container>
)
}

export default Iframe;