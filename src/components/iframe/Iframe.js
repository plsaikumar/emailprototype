import React from "react";
import classNames from "classnames";
import { Container ,Button} from "reactstrap";


<<<<<<< HEAD
const Iframe = ({ stateData }) => {

const iframe = '<iframe src="https://www.exmaple.com/show?data..." width="540" height="450"></iframe>' ;

return (<Container
        className={classNames("editor")}
    >
     <div dangerouslySetInnerHTML={{ __html: iframe }} />
      <span> {stateData.preheader}</span>
=======
const Iframe = () => (


    <Container
        className={classNames("editor")}
    >
     
      <span>Iframe</span>
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5


    </Container>
)
<<<<<<< HEAD
}
=======
>>>>>>> 3070c301e9aff58b55dcc1b4f2247ed3c75ec4c5

export default Iframe;