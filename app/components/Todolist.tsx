import { ITask } from '@/types/task'
import React from 'react'

interface TodolistProps{
    tasks : ITask[]
}

const Todolist: React.FC<TodolistProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto border-white border-2 rounded-2xl p-4 mt-8">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Task</th>
        
      </tr>
    </thead>
    <tbody>
      {tasks.map(task =>(
        <tr className="hover" key={task.id}>
            <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <th>{task.id}</th>
            <td>{task.text}</td>
            
      </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Todolist