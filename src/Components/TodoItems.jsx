import React, { useState } from "react";

const TodoItems = ({ task, deleteTask, toggleComplete, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="actions">
        <button onClick={toggleComplete.bind(null, task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={deleteTask.bind(null, task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItems;