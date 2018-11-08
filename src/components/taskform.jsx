import React from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      status: false,
    };
  }
  onClear = () =>{
    this.setState({
      name :'',
      status: false,
    })
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value; 
    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.props.onToggleForm();


  }
  render() {
    return (
      <React.Fragment>
        <div className="card card-warning text-white">
          <div className="card-header bg-warning">
            <h3 className="card-title ">Them Cong Viec  
           <span className= "fa fa-times-circle pl-5  text-right"
           onClick= {this.props.onToggleForm}
           >
            </span> 
            
            </h3>
            
          </div>
          <div className="card-body">
            <form onSubmit ={this.onSubmit}  >
              <div className="form-group">
                <label>Ten :</label>
                <input
                  type="text"
                  className="form-control"
                  value = { this.state.name}
                  placeholder="Input field"
                  name="name"
                  onChange = {this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Trang Thai :</label>

                <select
                  name="status"
                  className="form-control"
                  value = {this.state.status}
                  onChange = { this.onChange}
                >
                  <option value={true}>Kich Hoat</option>
                  <option value={false}> An</option>
                </select>
              </div>

              <button type="submit" className="btn btn-warning mr-3">
                Luu Lai
              </button>
              <button type= "button" onClick={this.onClear}  className="btn btn-danger">
                Huy Bo
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskForm;
