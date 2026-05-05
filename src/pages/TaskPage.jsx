import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronsLeft } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-7 ">
      {/* Aqui você pode adicionar o componente de tarefas */}

      <div className="flex items-center p-4">
        <button
          className="text-slate-100 p-2 rounded-md  cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronsLeft />
        </button>
        <h1 className="flex-1 text-3xl text-slate-100 font-bold text-center">
          Informação da Tarefa
        </h1>
      </div>

      <div className="space-y-4 p-4  bg-slate-200   rounded text-3xl">
        <div>
          <h1 className="text-slate-500 text-4xl font-bold ">{title}</h1>
          <p className="text-slate-500 text-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
