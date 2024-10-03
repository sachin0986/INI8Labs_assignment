import React from "react";
import TodoItems from "./TodoItems";

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
        <p className="no-tasks-message">Currently No tasks Added.</p>
      )}
    </ul>
  );
};

export default TodoList;