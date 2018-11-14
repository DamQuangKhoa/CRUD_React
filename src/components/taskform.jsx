import React from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/index";
class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
    };
  }
  onClear = () => {
    this.setState({
      name: "",
      status: false
    });
  };
  onChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.props.task.id) {
      this.props.onSaveTask(this.state);
    } else {
      this.props.onAddTask(this.state);
    }
    this.onClear();
    this.props.onToggleForm();
  };
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      let taskEdt = nextProps.task;
      if (taskEdt.id) {
        this.setState({
          id: taskEdt.id,
          name: taskEdt.name,
          status: taskEdt.status
        });
      } else {
        this.setState({
          id: "",
          name: "",
          status: false
        });
      }
    }
  }
  componentDidMount() {
    // life circle
    let taskEdt = this.props.task;
    if (taskEdt) {
      this.setState({
        id: taskEdt.id,
        name: taskEdt.name,
        status: taskEdt.status
      });
    }
  }
  render() {
    if (!this.props.isDisplayForm) {
      return "";
    }
    let { id } = this.state;
    return (
      <React.Fragment>
        <div className="card card-warning text-white">
          <div className="card-header bg-warning">
            <h3 className="card-title ">
              {id ? "Cap Nhat Cv" : "Them Cong Viec"}
              <span
                className="fa fa-times-circle pl-5  text-right"
                onClick={this.props.onCloseForm}
              />
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Ten :</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  placeholder="Input field"
                  name="name"
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Trang Thai :</label>

                <select
                  name="status"
                  className="form-control"
                  value={this.state.status}
                  onChange={this.onChange}
                >
                  <option value={true}>Kich Hoat</option>
                  <option value={false}> An</option>
                </select>
              </div>

              <button type="submit" className="btn btn-warning mr-3">
                Luu Lai
              </button>
              <button
                type="button"
                onClick={this.onClear}
                className="btn btn-danger"
              >
                Huy Bo
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    task: state.task
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: task => {
      dispatch(actions.addTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onUpdateTask: task => {
      dispatch(actions.updateTask(task));
    },
    onSaveTask: task => {
      dispatch(actions.saveTask(task));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
