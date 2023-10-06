import { ITask } from '@/types/task'
import React from 'react'
import {FiEdit} from 'react-icons/fi'
import {GoTrash} from 'react-icons/go'

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
        <th></th>
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
            <td className='w-full'>{task.text}</td>
            <td className='flex gap-10'>
              <FiEdit className='text-blue-400 rounded-lg border-spacing-6 hover:bg-slate-500 hover:text-black hover:border-spacing-6 ' cursor='pointer' size={25}/>
              <GoTrash className='text-red-600 rounded-lg border-spacing-6 hover:bg-red-700 hover:text-black hover:border-spacing-6' cursor='pointer' size={25}/>
            </td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Todolist