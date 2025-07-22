import React from 'react';

function TaskList({ todos, onRemove, onMarkDone, showDone }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.length === 0 && <p style={{ color: 'gray' }}>No tasks here.</p>}
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '18px' }}>
            {todo.text}
            {!showDone && (
              <span style={{ marginLeft: '10px', color: 'green' }}>Done</span>
            )}
          </span>

          {showDone && (
            <button
              onClick={() => onMarkDone(todo.id)}
              title="Mark as Done"
              style={{
                padding: '5px 10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
             Done
            </button>
          )}

          <button
            onClick={() => onRemove(todo.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
