import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
    };

  render(){
    return(
      <li>
        <input type="checkbox" checked={ this.props.done } onChange= { this.props.toggleDone } />
        <span> { this.props.what } </span><span><button onClick={ this.props.deleteTask }>del</button></span>
      </li>
    )
  }
}

export default Todo;
