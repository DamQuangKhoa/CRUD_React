import React from "react";

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort : {
        by : 'name',
        value : 1
      }
    };
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
  }
  onClick = (sortBy,sortValue) =>{
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    })
   this.props.onSort(this.state.sort) 
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
                      <li onClick={ () => this.onClick('name',1)} >
                        <a role= "button">A>Z</a>
                      </li>
                      <li onClick={ () => this.onClick('name',-1)}>
                        <a role= "button" >Z>A</a>
                      </li>
                      <li  onClick={ () => this.onClick('status',1)} >
                        <a role= "button">Kich Hoat</a>
                      </li>
                      <li onClick={ () => this.onClick('status',-1)}>
                        <a role= "button">An</a>
                      </li>
                    </ul>
                  </div>
                </div>
      </React.Fragment>
    );
  }
}

export default Sort;
