import React from "react";
import TaskForm from "./taskform";
import Control from "./control";
import TaskList from "./tab_list";
// import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "./../actions/index";

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filte: {
        name: "",
        status: -1
      },
      keyword: "",
      sort: {
        by: "name",
        value: 1
      }
    };
  }
  onSort = data => {
    this.setState({
      sort: {
        by: data.by,
        value: data.value
      }
    });
  };
  onSearch = keyword => {
    this.setState({
      keyword: keyword.toLowerCase()
    });
  };
  onToggleForm = () => {
   if (this.props.task.id) {
    this.props.openForm(); 
   }else{ 
    this.props.onToggleForm();
   }
  };
  
  onFilter = data => {
    this.setState({
      filter: {
        name: data.filterName.toLowerCase(),
        status: data.filterStatus
      }
    });
  };
  render() {
    let { isDisplayForm } = this.props;
    let { taskEditing, filter, keyword, sort } = this.state;
    // if (filter) {
    // //   if (filter.name !== null) {
    // //     tasks = tasks.filter(task => {
    // //       return task.name.toLowerCase().indexOf(filter.name) !== -1;
    // //     });
    // //   }
    // // }
    // // if (keyword) {
    // //   tasks = filter(tasks, (task) =>{
    // //     return task.name.toLowerCase().indexOf(keyword) !== -1
    // //   } )
    // // }
    // if (sort.by === 'name') {
    //   tasks.sort((a,b) => {
    //     if(a.name > b.name) return sort.value;
    //     else if(a.name <b.name) return sort.value;
    //     return 0;
    //   })
    // }else{
    //   tasks.sort((a,b) => {
    //   if(a.status > b.status) return -sort.value;
    //   else if(a.status <b.status) return sort.value;
    //   return 0;
    //   })
    // }

    //   if (filter) {
    //   tasks = tasks.filter(task => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h1 className="text-center">Quan Li Cong Viec</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
              <TaskForm task={taskEditing} />
            </div>

            <div
              className={
                isDisplayForm === false
                  ? "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                  : "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              }
            >
              <button
                type="button"
                className="btn btn-warning mr-3"
                onClick={this.onToggleForm}
              >
                Them Cong Viec
              </button>

              <Control
                sort={this.state.sort}
                onSort={this.onSort}
                onSearch={this.onSearch}
              />

              <div className="row">
                <div className="col-md-12">
                  <h4>Bootstrap Snipp for Datatable</h4>
                  <TaskList   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    task : state.task
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    openForm: () => {
      dispatch(actions.openForm());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);
