import React, { Component } from "react";

class Couter extends Component {
  state = {
    count: 1,
    tags: ['tag1','tag2','tag3']
  };
  renderTags(){
    if(this.state.tags.length ===0) return <p>There is no tags !</p>
    return <ul>
          {this.state.tags.map(tag => <li key={tag}> {tag}</li>)}
        </ul> 
  }
  render() {
    return (
      <React.Fragment>
        
        <span  className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button className = "btn btn-secondary btn-sm">Increment</button>
       {this.renderTags()} 
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes
  }

  formatCount() {
    const { count } = this.state;
    const zero = <h3>Zero</h3>;
    return count === 0 ?  zero: count;
  }
}
export default Couter;
