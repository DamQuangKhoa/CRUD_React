import React from "react";

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {task, index} = this.props;
    return (
      <React.Fragment>
          <tr>
                <td>{index +1}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">
                  <span className={task.status? 'badge badge-danger' : 'badge badge-warning' }>{task.status? 'Kich Hoat': 'An '}</span>
                </td>
                <td className="text-center">
                  <a className="btn btn-info btn-xs" href="">
                    <span className="fa fa-pencil" />
                    Edit
                  </a>
                  <a href="" className="btn btn-danger btn-xs">
                    <span className="glyphicon glyphicon-remove" />
                    Del
                  </a>
                </td>
              </tr>
      </React.Fragment>
    );
  }
}

export default TaskItem;
