import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import '../App.css';

type Task = {
  id: number;
  name: string;
  completed: boolean;
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed'>('all');
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName.trim() === '') return;
    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskName('');
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true : task.completed
  );

  return (
    <div className="container">
      <h1>Task List</h1>
      <Input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Add a new task"
        className="input"
      />
      <Button onClick={addTask} className="button addTask">Add Task
      </Button> 
      <div>
        <Button onClick={() => setFilter('all')} className="button filter">Show All</Button>
        <Button onClick={() => setFilter('completed')} className="button filter">Show Completed</Button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} className="taskItem">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <Button onClick={() => toggleTaskCompletion(task.id)} className={`button ${task.completed ? "undo" : "complete"}`}>
              {task.completed ? 'Undo' : 'Complete'}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
