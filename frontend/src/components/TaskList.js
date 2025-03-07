import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      {tasks.map((task) => (
        <div key={task._id} className="p-4 bg-gray-100 rounded mb-2">
          <h3 className="font-bold">{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task._id)} className="text-red-500">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
