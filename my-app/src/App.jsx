import { useState, useEffect } from "react";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";
import { TaskTable } from "./components/TaskTable";
import { Container } from "./components/Container";

function App() {
  const [userName, setUserName] = useState("Lista");
  const [taskItems, setTaskItems] = useState([]);
  const [MostrarCompletadas, setshowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
    setUserName("lista");
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName))
      setTaskItems([...taskItems, { name: taskName, done: false }]);
  };

  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setshowCompleted(false);
  };

  return (
    <main className=" vh-100 text-white">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          description="tareas realizadas"
          isChecked={MostrarCompletadas}
          callback={(checked) => setshowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {MostrarCompletadas && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            MostrarCompletadas={MostrarCompletadas}
          />
        )}
      </Container>
    </main>
  );
}

export default App

