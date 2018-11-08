import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
           <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="input-group">
                    <input
                      type="text"
                      name="keyword"
                      placeholder="Nhap Tu Khoa"
                      id="inputkeyword"
                      className="form-control"
                    />

                    <span className="input-group-btn">
                      <button type="button" className="btn btn-primary">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
      </React.Fragment>
    );
  }
}

export default Search;
