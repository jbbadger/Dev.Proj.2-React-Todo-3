import React, { Component } from 'react';
import Todo from './components/Todo.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
      { what: 'eat', done: true},
      { what: 'drink', done: false},
      { what: 'sleep', done: false}
    ],
      newTaskWhat: ''
    };
    this.toggleDone = this.toggleDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  toggleDone(index){
    const newTasks = this.state.tasks.slice();
    const anti = newTasks[index];
    anti.done = !anti.done;
    this.setState({ tasks: newTasks });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTaskWhat) { return }
    let matter = { what: this.state.newTaskWhat, done: false};
    this.setState({tasks: [...this.state.tasks, matter], newTaskWhat: ''});
  }

  handleChange(e) {
    this.setState({ newTaskWhat: e.target.value })
  }

  deleteTask (item) {
    let delTask = this.state.tasks.filter((filtItem) => filtItem !== item);
    this.setState({ tasks: delTask })
  }

  render() {
    return (
      <div className="App">
        <ul>
         {this.state.tasks.map((item, index) =>
          <Todo key={ index } what={ item.what } done={ item.done } toggleDone= { () => this.toggleDone(index) }  deleteTask={() => this.deleteTask(item)}/>
          )}
        </ul>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={this.state.newTaskWhat} onChange={ this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
