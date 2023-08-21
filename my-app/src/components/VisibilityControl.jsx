export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm(`¿Eliminar todas las tareas que completaste?`)) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between text-center p-2 border-secondary" style={{ color: "#000" }}>
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label">Ver mis {description}</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
      <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};
