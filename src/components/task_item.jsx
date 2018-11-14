import React from "react";
import * as actions from "./../actions/index";
import { connect } from "react-redux";
class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onUpdate = () => {
    this.props.onOpenForm(); 
    this.props.onUpdate(this.props.task);
  };
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };
  render() {
    let { task, index } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>{index + 1}</td>
          <td className="text-center">{task.name}</td>
          <td onClick={this.onUpdateStatus} className="text-center">
            <span
              className={
                task.status ? "badge badge-danger" : "badge badge-warning"
              }
            >
              {task.status ? "Kich Hoat" : "An "}
            </span>
          </td>
          <td className="text-center">
            <button onClick={this.onUpdate} className="btn btn-info btn-xs">
              <span className="fa fa-pencil" />
              Edit
            </button>
            <button onClick={this.onDelete} className="btn btn-danger btn-xs">
              <span className="glyphicon glyphicon-remove" />
              Del
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  // return {
  //   task: state.task
  // };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: id => {
      dispatch(actions.updateStatusTask(id));
    },
    onDelete: id => {
      dispatch(actions.deleteTask(id));
    },
    onUpdate: task => {
      dispatch(actions.updateTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskItem);
