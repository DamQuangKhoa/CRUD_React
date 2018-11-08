import React from "react";
import TaskItem from "./task_item";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {tasks} = this.props;
    let elemTasks = tasks.map((task,index) => {
      return <TaskItem key={task.id} index = {index} task= {task} />
    })
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
                        name=""
                        id="input"
                        className="form-TaskList"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <select
                    name="filterStatus"
                    id="inputfilterStatus"
                    className="form-TaskList"
                    required="required"
                  >
                    <option value="">Tat Ca</option>
                    <option value="">Kich Hoat</option>
                    <option value="">An</option>
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