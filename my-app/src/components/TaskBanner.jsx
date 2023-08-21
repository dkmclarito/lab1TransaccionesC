export const TaskBanner = ({taskItems }) => (
  <div>
  <h4
    className="text-white text-center p-4 fw-bold tareasTitulo"
    style={{ background: "#185adc" }}
  >
    Lista de tareas{" "}
  </h4>
    <h4
    className="text-white text-center  mb-5 fw-bold"
    style={{ background: "#185adc" }}
  >
    <span className="" style={{ color: "#fff200" }}>
      Tienes {taskItems.filter((t) => !t.done).length} tareas por hacer
    </span>
  </h4>
  </div>
);
