import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function Home() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      const newTask = {
        id: Date.now() + Math.random(), // Unique ID
        text: task,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setTask('');
    }
  };

  const handleRemoveTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleMarkDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  const activeTasks = todos.filter((todo) => !todo.completed);
  const completedTasks = todos.filter((todo) => todo.completed);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} />

      <h2>Pending Tasks</h2>
      <TaskList
        todos={activeTasks}
        onRemove={handleRemoveTask}
        onMarkDone={handleMarkDone}
        showDone={true}
      />

      <h2>Completed Tasks</h2>
      <TaskList
        todos={completedTasks}
        onRemove={handleRemoveTask}
        showDone={false}
      />
    </div>
  );
}

export default Home;
