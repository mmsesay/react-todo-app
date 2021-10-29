import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  const { completed, id, title } = props.todo;

  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }


  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])
  
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