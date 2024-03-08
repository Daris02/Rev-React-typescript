import { TaskData } from "../types";
import "./TaskManager.css";

interface TaskProps {
  task: TaskData;
  updateTask: (id: string, taskUpdate: TaskData) => void;
  completeTask: (id: string) => void;
}

function Task( {task, updateTask, completeTask}: TaskProps ) {
  return (
    <li key={task.id} className="task">
      <div className="task">
        <input
          type="text"
          placeholder="Add new task"
          value={task.title}
          onChange={(e) => updateTask(task.id, { id: task.id, title: e.target.value })}
        />
        <button onClick={() => completeTask(task.id)}>Done</button>
      </div>
    </li>
  );
}

export default Task;
