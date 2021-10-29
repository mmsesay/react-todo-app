import React from "react"
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  let state = {
    editing: false,
  }
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  const { completed, id, title } = props.todo;

  const handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  let viewMode = {}
  let editMode = {}

  // if (this.state.editing) {
  //   viewMode.display = "none"
  // } else {
  //   editMode.display = "none"
  // }

  return (
    <div>
      <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}></div>
        <input 
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title} 
          onChange={e => {
            props.setUpdate(e.target.value, id)
          }}
          onKeyDown={handleUpdatedDone}
        />
      </li>
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    </div>
  );
}

export default TodoItem