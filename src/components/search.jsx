import React from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }
  onChange = (event) =>{
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
    [name] : value
    })
  }
  onSearch = (event) =>{
this.props.onSearch(this.state.keyword)
  }
  render() {
    return (
      <React.Fragment>
           <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <div className="input-group">
                    <input
                      type="text"
                      name= "keyword"
                      value={this.keyword}
                      placeholder="Nhap Tu Khoa"
                      className="form-control"
                      onChange = {this.onChange}
                    />

                    <span className="input-group-btn">
                      <button 
                      onClick ={this.onSearch}
                      type="button" className="btn btn-primary">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    searchTask : state.searchTask
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: keyword => {
      dispatch(actions.search(keyword));
    },
 };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);


