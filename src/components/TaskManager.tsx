import { useState } from "react";
import "./TaskManager.css";
import Task from "./Task";
import useTaskManager from "../hooks/useTaskManager";

export function TaskManager() {
  const [title, setTitle] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const { completeTask, updateTask, addTask, filterTasks } = useTaskManager();

  const handleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(ev.target.value);
  };

  const filteredTasks = filterTasks(searchKeyword);

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

        <button onClick={() => {addTask(title), setTitle("")}}>Add Task</button>
      </div>

      <ul className="container">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} updateTask={updateTask} completeTask={completeTask} />
        ))}
      </ul>

    </div>
  )
}
