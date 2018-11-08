import React from "react";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <form action="" method="POST" >
              <div className="form-group">
                <label>Ten :</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Input field"
                />
              </div>

              <div className="form-group">
                <label>Trang Thai :</label>

                <select
                  name="status"
                  id="inputstatus"
                  className="form-control"
                  required="required"
                >
                  <option value="">Kich Hoat</option>
                  <option value=""> An</option>
                </select>
              </div>

              <button type="submit" className="btn btn-warning mr-3">
                Luu Lai
              </button>
              <button type="submit" className="btn btn-danger">
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
