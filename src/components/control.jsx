import React from "react";
import Search from "./search";
import Sort from "./sort";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>

        
              <div className="row">
                <Search />
                <Sort />

                
              </div>
      </React.Fragment>
    );
  }
}

export default Control;
