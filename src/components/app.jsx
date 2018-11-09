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
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }
  onSort = data => {
    this.setState({
      sort : {
        by: data.by,
        value: data.value,
      }
    })
   };
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }
  };
  onSearch = keyword => {
    this.setState({
      keyword: keyword.toLowerCase()
    });
  };
  findIndex = id => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((t, index) => {
      if (t.id === id) {
        result = index;
      }
    });
    return result;
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  };
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  };
  onUpdate = id => {
    let { tasks } = this.state;
    var index = this.findIndex(id);
    let taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    });
    console.log(taskEditing);
    this.onShowForm();
  };
  onUpdateStatus = id => {
    let tasks = this.state.tasks.slice();
    tasks.map(task => {
      if (task.id === id) {
        task.status = !task.status;
      }
    });

    this.setState({ tasks: tasks });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onFilter = data => {
    this.setState({
      filter: {
        name: data.filterName.toLowerCase(),
        status: data.filterStatus
      }
    });
    console.log(this.state.filter);
  };
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
    console.log(data);

    if (data.id !== "") {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    } else {
      console.log("else");

      let task = {
        id: this.make_id(),
        name: data.name,
        status: data.status === "true" ? true : false
      };
      tasks.push(task);
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  make_id = () => {
    return randomstring.generate();
  };

  render() {
    let { tasks, isDisplayForm, taskEditing, filter, keyword ,sort} = this.state;
    if (filter) {
      if (filter.name !== null) {
        tasks = tasks.filter(task => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
    }
    if (keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if (sort.by === 'name') {
      tasks.sort((a,b) => {
        if(a.name > b.name) return sort.value;
        else if(a.name <b.name) return sort.value;
        return 0;
      })
    }else{ 
      tasks.sort((a,b) => {
      if(a.status > b.status) return -sort.value;
      else if(a.status <b.status) return sort.value;
      return 0;
      })
    }
  
    //   if (filter) {
    //   tasks = tasks.filter(task => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false);
    //     }
    //   });
    // }

    let eleTaskForm = isDisplayForm ? (
      <TaskForm
        task={taskEditing}
        onSubmit={this.onSubmit}
        onToggleForm={this.onToggleForm}
      />
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

              <Control
              sort = {this.state.sort}
              onSort = {this.onSort}
              onSearch={this.onSearch} />

              <div className="row">
                <div className="col-md-12">
                  <h4>Bootstrap Snipp for Datatable</h4>
                  <TaskList
                    tasks={tasks}
                    onUpdate={this.onUpdate}
                    onUpdateStatus={this.onUpdateStatus}
                    onDelete={this.onDelete}
                    onFilter={this.onFilter}
                  />
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
