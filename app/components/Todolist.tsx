import { ITask } from '@/types/task'
import React, { useState } from 'react'
import Modal from './Modal'
import {FiEdit} from 'react-icons/fi'
import {GoTrash} from 'react-icons/go'
import Task from './Task'

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
        <Task key={task.id} task={task}/>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default Todolist