import { useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/addTask";

function App() {
  const [tasksPlus, setTasks] = useState([
    {
      id: 1,
      title: "Aprender react",
      description: "Descrição da tarefa 1",
      completed: false,
    },
    {
      id: 2,
      title: "Aprender git",
      description: "Descrição da tarefa 2",
      completed: false,
    },
    {
      id: 3,
      title: "Aprender express",
      description: "Descrição da tarefa 3",
      completed: false,
    },
  ]);

function onTaskClick(taskId) {
  const neewTasks = tasksPlus.map((task) => {
    if (task.id === taskId) { 
      return { ...task, completed: !task.completed };
    }
    return task;
  });  // <-- faltava o ) aqui para fechar o .map()

  setTasks(neewTasks);
}

function onTaskDelete(taskid) {
  const newTasks = tasksPlus.filter((task) => task.id !== taskid);
  setTasks(newTasks);
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-125">
        <h1 className="text-3xl text-slate-100 font-bold text-center ">
          Gerenciador de Tarefas
        </h1>
        <AddTask/>
        <Tasks tasks={tasksPlus} onTaskClick={onTaskClick} onTaskDelete={onTaskDelete} />
      </div>
    </div>
  );
}

export default App;
