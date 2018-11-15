import React from "react";
import TaskItem from "./task_item";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1
    };
  }
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    this.props.onFilter({
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus
    });
    this.setState({
      [name]: value
    });
  };

  render() {
    let { tasks, filterTask, searchTask } = this.props;
    let { filterName, filterStatus } = this.state;
    if (filterTask) {
      if (filterTask.name !== null) {
        tasks = tasks.filter(task => {
          return task.name.toLowerCase().indexOf(filterTask.name) !== -1;
        });
      }
      tasks = tasks.filter(task => {
        if (filterTask.status === -1) {
          return task;
        } else {
          return task.status === (filterTask.status === 1 ? true : false);
        }
      });
    }
    if (searchTask.keyword ) {
      console.log(searchTask);
      tasks = tasks.filter( task => {
        return task.name.toLowerCase().indexOf(searchTask) !== -1;
      });
    }
    let elemTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />;
    });
    return (
      <React.Fragment>
        <div className="table-responsive">
          <table id="mytable" className="table table-bordred table-hover mt-15">
            <thead>
              <tr>
                <th>STT</th>
                <th className="text-center">Ten</th>
                <th>Trang Thai</th>
                <th className="text-center">Hanh Dong</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td />
                <td>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="filterName"
                        className="form-TaskList w-100"
                        value={filterName}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <select
                    name="filterStatus"
                    className="form-TaskList w-100"
                    onChange={this.onChange}
                    value={filterStatus}
                  >
                    <option value={-1}>Tat Ca</option>
                    <option value={1}>Kich Hoat</option>
                    <option value={0}>An</option>
                  </select>
                </td>
              </tr>
              {elemTasks}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filterTask: state.filterTask,
    searchTask: state.searchTask
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: filter => {
      dispatch(actions.filterTask(filter));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
