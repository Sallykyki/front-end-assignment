import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoTable from "./TodoTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", date: "", todos: [] };
  }
  addTodo = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { description: this.state.description, date: this.state.date }
      ]
    });
  };

  inputChanged = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  deletePressed = index => () => {
    const newTodos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Todo list</h1>
        </header>
        <form onSubmit={this.addTodo}>
          <fieldset>
            <legend>Add todo:</legend>
            Description:<input
              type="text"
              name="description"
              onChange={this.inputChanged}
              value={this.state.description}
            />
            Date
            <input
              type="date"
              name="date"
              onChange={this.inputChanged}
              value={this.state.date}
            />
            <input type="submit" value="Add" />
          </fieldset>
        </form>
        <div>
          <button onClick={this.deletePressed(0)}>Hellos</button>
          <TodoTable
            todos={this.state.todos}
            deletePressed={this.deletePressed}
          />
        </div>
      </div>
    );
  }
}

export default App;
