import React from 'react';

class TaskList extends React.Component {
  render() {
    const tasks = [
      { title: 'Clean dishes', id: 1 },
      { title: 'Take out bins', id: 2 },
      { title: 'Change bed', id: 3 },
    ];

    const tasksList = tasks.map((task) => <li key={task.id}><strong>Task:</strong> {task.title}</li>);

    return (
      <div className='full-width'>
        <div className='container'>
          <h1>Tasks List</h1>
          <div className='flex-center'>
            <ul>{tasksList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
