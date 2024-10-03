import React from "react";
import TodoItems from "./TodoItems";
import "./CSS/TodoList.css";
const TodoList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  return (
    <ul className="todo-list">
      {tasks.length > 0 ? (
        tasks.map(task => (
          <TodoItems
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </ul>
  );
};

export default TodoList;