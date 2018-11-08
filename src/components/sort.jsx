import React from "react";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      Sap Xep
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">A>Z</a>
                      </li>
                      <li>
                        <a href="#">Z>A</a>
                      </li>
                      <li>
                        <a href="#">Kich Hoat</a>
                      </li>
                      <li>
                        <a href="#">An</a>
                      </li>
                    </ul>
                  </div>
                </div>
      </React.Fragment>
    );
  }
}

export default Sort;
