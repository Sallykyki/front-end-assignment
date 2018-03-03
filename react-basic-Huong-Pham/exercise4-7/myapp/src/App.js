import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

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
  deletePressed = index => () => {
    const newTodos = this.state.todos.filter((todo, i) => i !== index);
    this.setState({
      todos: newTodos
    });
  };
  inputChanged = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const listItems = this.state.todos.map((todo, index) => (
      <tr key={index}>
        <td>{todo.date}</td>
        <td>{todo.description}</td>
        <td>
          <button onClick={this.deletePressed(index)}>Delete</button>
        </td>
      </tr>
    ));
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
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <th>Description</th>
              </tr>
              {listItems}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
