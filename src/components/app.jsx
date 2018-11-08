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
      isDisplayForm: false,
      taskEditing : null
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
  findIndex = id => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((t, index) => {
      console.log(t.id);
      if (t.id === id) {
        result = index;
      }
    });
    return result;
  };
  onUpdate = (id) => {
    console.log(id);
    
  }
  onUpdateStatus = id => {
    let tasks = this.state.tasks.slice();
    tasks.map( task => {
      if(task.id === id){
        task.status = !task.status;
      }
    });    
    this.setState({tasks: tasks});

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
 
  onDelete = id => {
    let tasks = this.state.tasks.slice();
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  onSubmit = data => {
    let tasks = this.state.tasks.slice();
    let task = {
      id: this.make_id(),
      name: data.name,
      status: data.status === "true" ? true : false
    };
    tasks.push(task);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  make_id = () => {
    return randomstring.generate();
  };
  
  render(){
    let { tasks, isDisplayForm} = this.state;
    let eleTaskForm = isDisplayForm ? (
      <TaskForm onSubmit={this.onSubmit} onToggleForm={this.onToggleForm} />
    ) : (
      ""
    );

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

              <Control />

              <div className="row">
                <div className="col-md-12">
                  <h4>Bootstrap Snipp for Datatable</h4>
                  <TaskList tasks={tasks}
                  onUpdate = {this.onUpdate}
                  onUpdateStatus = {this.onUpdateStatus}
                  onDelete={this.onDelete} />
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
