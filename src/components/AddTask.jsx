import { useState } from "react";

function AddTask({ onAddSubmitTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        type="text"
        placeholder="Tarefa:"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição:"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white p-2 rounded-md w-full cursor-pointer"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha o título e a descrição da tarefa.");
          }
          setTitle("");
          setDescription("");
          onAddSubmitTask(title, description);
        }}
      >

        Adicionar
      </button>
    </div>
  );
}
export default AddTask;
