import React from 'react';

function AddTask({ task, setTask, handleAddTask }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{
          padding: '10px',
          width: '250px',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
