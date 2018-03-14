import React, { Component } from "react";
import "./App.css";

class TodoTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listItems = this.props.todos.map((todo, index) => (
      <tr key={index}>
        <td>{todo.date}</td>
        <td>{todo.description}</td>
        <td>
          <button onClick={this.props.deletePressed(index)}>Delete</button>
        </td>
      </tr>
    ));
    return (
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {listItems}
        </tbody>
      </table>
    );
  }
}
export default TodoTable;
