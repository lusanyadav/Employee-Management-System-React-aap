import React from 'react'
import AllTask from '../other/AllTask';
import CreateTask from '../other/CreateTask';
import Header from '../other/Header'

const AdminDashboard = (props) => {
  return (
    <div className="p-10 bg-black text-white h-screen">
      <Header changeUser={props.changeUser}/>
      <CreateTask />

      <AllTask />
    </div>
  );
}

export default AdminDashboard
