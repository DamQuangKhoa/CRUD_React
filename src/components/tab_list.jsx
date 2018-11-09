import React from "react";
import TaskItem from "./task_item";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1
    };
  }
  onChange = (event) =>{
     
    let target = event.target;
    let name = target.name;
    let value = target.value;
    console.log(value);

    this.setState({
      [name] :value
    });
    this.props.onFilter(this.state);
  }
  render() {
    let { tasks } = this.props;
    let { filterName, filterStatus } = this.state;
    let elemTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          onDelete={this.props.onDelete}
          onUpdateStatus={this.props.onUpdateStatus}
          onUpdate={this.props.onUpdate}
          key={task.id}
          index={index}
          task={task}
        />
      );
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
                        onChange = {this.onChange } />
                    </div>
                  </div>
                </td>
                <td>
                  <select
                    name="filterStatus"
                    className="form-TaskList w-100"
                    onChange = {this.onChange}  
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

export default TaskList;
