import { ChevronRightIcon, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  const navigate = useNavigate();

  function onSeeDatils(task) {
    const queryParams = new URLSearchParams();
    queryParams.append("title", task.title);
    queryParams.append("description", task.description);
    navigate(`/tasks?${queryParams.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {" "}
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={
              "bg-slate-400 text-white p-2 rounded-md w-full text-left cursor-pointer" +
              (task.completed ? " line-through" : "")
            }
          >
            {task.title}
          </button>

          <button
            onClick={() => onSeeDatils(task)}
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer "
          >
            <ChevronRightIcon />
          </button>

          <button
            className="bg-slate-400 p-2 rounded-md text-white cursor-pointer"
            onClick={() => onTaskDelete(task.id)}
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
