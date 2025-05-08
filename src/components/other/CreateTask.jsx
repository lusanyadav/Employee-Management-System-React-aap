import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {


  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [task, setTask] = useState({})

  const sumbmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      asignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Work on a deep copy of userData
    const updatedData = userData.map((user) => {
      if (user.firstName === asignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
        };
      }
      return user;
    });

    setUserData(updatedData); // update in context
    localStorage.setItem("employees", JSON.stringify(updatedData)); // update localStorage
    console.log("Updated userData:", updatedData);


    // Reset form fields
    setTaskTitle("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
    setTaskDescription("");
  };
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form
        onSubmit={(e) => {
          sumbmitHandler(e);
        }}
        className="flex w-full flex-wrap items-start justify-between bg-[#1C1C1C]"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make a UI design"
              className="text-sm py-1 px-2 w-4/5 mb-4 outline-none bg-transparent  border-[1px] border-gray-400 rounded"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="text-sm py-1 px-2 w-4/5 mb-4 outline-none bg-transparent  border-[1px] border-gray-400 rounded"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              type="text"
              placeholder="Employee name"
              className="text-sm py-1 px-2 w-4/5 mb-4 outline-none bg-transparent  border-[1px] border-gray-400 rounded"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="design, dev, etc"
              className="text-sm py-1 px-2 w-4/5 mb-4 outline-none bg-transparent  border-[1px] border-gray-400 rounded"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            name=""
            id=""
            cols="30"
            rows="10"
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 hover:scale-105 transition-all duration-200 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask
