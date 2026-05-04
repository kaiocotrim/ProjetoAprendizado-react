import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-600 p-7" >
      {/* Aqui você pode adicionar o componente de tarefas */}
      <h1 className="text-3xl text-slate-100 font-bold text-center m-4">
        Informação da Tarefa
      </h1>

      <div className="space-y-4 p-4 bg-slate-400 rounded text-3xl">
        <div>
            <h1 className="text-white text-4xl">{title}</h1>
            <p className="text-white text-2xl">{description}</p>    
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
