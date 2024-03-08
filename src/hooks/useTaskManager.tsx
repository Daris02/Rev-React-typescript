import { useState } from "react";
import { TaskData } from "../types";
import { nanoid } from "nanoid";

export default function useTaskManager() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const completeTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id: string, taskUpdate: TaskData) => {
    const newTasks = tasks.slice();

    const index = tasks.findIndex((task) => task.id === id);

    newTasks[index] = taskUpdate;

    setTasks(newTasks);
  };

  
  const addTask = (title: string) => {
    if (title.length < 1) {
      return;
    }

    const newTask = {
      // using nanoid to generate unique id
      id: nanoid(),
      title,
    };

    setTasks((prev) => prev.concat(newTask));
  };

  const filterTasks = (searchKeyword: string) => {
    return tasks.filter((task) => task.title.toLowerCase().includes(searchKeyword.toLowerCase()));
  }

  return { tasks, addTask, updateTask, completeTask, filterTasks };
}
