import React from "react";
import TaskForm from "./taskform";
import Control from "./control";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
                <Control />
       </React.Fragment>
    );
  }
}
export default Test;