import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-55">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.map((elem, idx) => {
          return (
            <div key={idx} className="border-2 border-emerald-400 py-2 px-4 mb-2 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5 ">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskCounts.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-300">{elem.taskCounts.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-white-400">{elem.taskCounts.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask
