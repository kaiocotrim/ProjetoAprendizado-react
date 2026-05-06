import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronsLeft } from "lucide-react";
import Button from "../components/button";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-7 ">
      <div className="relative flex items-center justify-center p-4">
        <div className="absolute left-4">
          <Button onClick={() => navigate(-1)}>
            <ChevronsLeft />
          </Button>
        </div>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
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
