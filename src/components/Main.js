import React, { useState } from "react";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddTask = () => {
    if (newTask.trim() && category.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, category, completed: false }]);
      setNewTask("");
      setCategory("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((task) => task.category === filter);

  return (
    <main className="flex-grow bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="bg-white shadow-lg rounded-xl p-8">
          {/* Task Input */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              className="flex-grow border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 text-gray-700"
              placeholder="Task Name"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <input
              type="text"
              className="flex-grow border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 text-gray-700"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button
              className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-700">
              Filter by Category:
            </span>
            <select
              className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 rounded-lg px-4 py-3 text-gray-700"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              {[...new Set(tasks.map((task) => task.category))].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Task List */}
          <ul className="space-y-6">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center bg-gray-100 border border-gray-300 rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition duration-300"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">{task.name}</p>
                  <p className="text-sm text-gray-500">{task.category}</p>
                </div>
                <button
                  className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition duration-300"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
