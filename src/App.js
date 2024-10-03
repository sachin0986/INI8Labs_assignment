import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import TaskInput from "./Components/TaskInput";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const filterTasks = () => {
    let filteredTasks = tasks;
    if (filter === "completed") {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (filter === "incomplete") {
      filteredTasks = tasks.filter(task => !task.completed);
    }
    return filteredTasks.filter(task =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="app">
      <Header setFilter={setFilter} setSearchQuery={setSearchQuery} />
      <TaskInput addTask={addTask} />
      <TodoList
        tasks={filterTasks()}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
};

export default App;