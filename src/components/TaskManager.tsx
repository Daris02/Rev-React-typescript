import { nanoid } from "nanoid";
import { useState } from "react";
import "./TaskManager.css";
import { TaskData, eventTarget } from "../types";
import Task from "./Task";

export function TaskManager() {
  const [title, setTitle] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [tasks, setTasks] = useState<TaskData[]>([]);

  // remove task from list
  const completeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, taskUpdate: TaskData) => {
    const newTasks = tasks.slice();

    const index = tasks.findIndex((task) => task.id === id);

    newTasks[index] = taskUpdate;

    setTasks(newTasks);
  };

  const addTask = () => {
    if (title.length < 1) {
      return;
    }

    const newTask = {
      // using nanoid to generate unique id
      id: nanoid(),
      title,
    };

    setTasks((prev) => prev.concat(newTask));
    setTitle("");
  };

  const handleSearch = (ev: eventTarget) => {
    setSearchKeyword(ev.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  return (
    <div className="container">
      
      <h1>Task Manager</h1>

      <div>
        <input type="text" onChange={handleSearch} placeholder="Search Task" />
      </div>

      <div className="task">
        <input
          type="text"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="container">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} updateTask={updateTask} completeTask={completeTask} />
        ))}
      </ul>

    </div>
  )
}
