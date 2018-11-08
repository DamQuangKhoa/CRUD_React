import React from "react";
import TaskForm from "./taskform";
import Control from "./control";
import TaskList from "./tab_list";
var randomstring = require("randomstring");

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }
  onToggleForm = () => {
    
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
      
    });
  };
  generateData = () => {
    let tasks = [
      {
        id: this.make_id(),
        name: "Hoc Lap Trinh",
        status: true
      },
      {
        id: this.make_id(),
        name: "Hoc Boi",
        status: false
      },
      {
        id: this.make_id(),
        name: "Hoc Ngu",
        status: true
      }
    ];
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  make_id = () => {
    return randomstring.generate();
  };
  render() {
    let { tasks, isDisplayForm } = this.state;
    let eleTaskForm = isDisplayForm ? <TaskForm onToggleForm={ this.onToggleForm} /> : "";

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
              {eleTaskForm}
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
              
              <button
                type="button"
                className=" btn btn-danger"
                onClick={this.generateData}
              >
                Generate Data
              </button>
              <Control />

              <div className="row">
                <div className="col-md-12">
                  <h4>Bootstrap Snipp for Datatable</h4>
                  <TaskList tasks={tasks} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Application;
