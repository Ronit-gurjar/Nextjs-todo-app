import { ITask } from '@/types/task'
import React from 'react'

interface TodolistProps{
    tasks : ITask[]
}

const Todolist: React.FC<TodolistProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto border-white border-2 rounded-2xl p-4 mt-2">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Task</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task =>(
        <tr className="hover">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>{task.id}</th>
        <td>{task.text}</td>
        <td>Important</td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Todolist