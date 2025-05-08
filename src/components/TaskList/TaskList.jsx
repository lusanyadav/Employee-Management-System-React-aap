import React from 'react'
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 py-5 mt-10">
      
      {
        data.tasks.map((ele, idx) => {
          if (ele.active) {
            return <AcceptTask key={ idx } data={ele} />
          }
          if (ele.newTask) {
            return <NewTask key={idx} data={ele} />;
          }

          if (ele.completed) {
            return <CompleteTask key={idx} data={ele} />;
          }

          if (ele.failed) {
            return <FailedTask key={idx} data={ele} />;
          }
        })
      }
    </div>
  );
}

export default TaskList
