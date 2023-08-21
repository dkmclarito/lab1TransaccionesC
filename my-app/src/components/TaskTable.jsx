import { TaskRow } from "./TaskRow";

export function TaskTable({ tasks, toggleTask, MostrarCompletadas = false }) {
  console.log(MostrarCompletadas);
  const taskTableRows = (doneValue) =>
    tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <table className="table table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Tus tareas</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(MostrarCompletadas)}</tbody>
    </table>
  );
}
