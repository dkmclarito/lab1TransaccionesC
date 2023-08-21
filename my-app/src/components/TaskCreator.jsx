import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    if (newTaskName.trim() === "") {
      alert("Tarea nula");
      return;
    }

    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form className="my-2 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          type="text"
          className="form-control"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Agregar tarea..."
          autoFocus
        />
      </div>
      <div className="col-3">
        <button className="btn btn-primary" type="submit">
        <i class="fas fa-save"></i> 
        </button>
      </div>
    </form>
  );
};
