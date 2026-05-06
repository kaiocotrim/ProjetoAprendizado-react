import { useEffect, useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasksPlus, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasksPlus") || "[]"),
  );

  useEffect(() => {
    localStorage.setItem("tasksPlus", JSON.stringify(tasksPlus));
  }, [tasksPlus]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
        {},
      );
      const data = await response.json();
      setTasks(data);
    }

    fetchData();
  }, []);

  function onAddSubmitTask(title, description) {
    // Lógica para adicionar uma nova tarefa
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasksPlus, newTask]);
  }

  function onTaskClick(taskId) {
    const neewTasks = tasksPlus.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }); // <-- faltava o ) aqui para fechar o .map()

    setTasks(neewTasks);
  }

  function onTaskDelete(taskid) {
    const newTasks = tasksPlus.filter((task) => task.id !== taskid);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-125 space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center ">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddSubmitTask={onAddSubmitTask} />
        <Tasks
          tasks={tasksPlus}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
