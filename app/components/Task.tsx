"use client";

import { ITask } from '@/types/task'
import React, { useState } from 'react'
import Modal from './Modal'
import {FiEdit} from 'react-icons/fi'
import {GoTrash} from 'react-icons/go'

interface TaskProps{
    task : ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
    const [openModalEdit, setopenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setopenModalDelete] = useState<boolean>(false);
    const [taskToEdit, settaskToEdit] = useState(task.text);

    const handleSubmitEditTodo = () => {}
  
  return (
    <tr className="hover" key={task.id}>
            <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
            </th>
            <th>{task.id}</th>
            <td className='w-full'>{task.text}</td>
            <td className='flex gap-10'>
              <FiEdit onClick={()=>setopenModalEdit(true)}  className='text-blue-400 rounded-lg border-spacing-6 hover:bg-slate-500 hover:text-black hover:border-spacing-6 ' cursor='pointer' size={25}/>
              <Modal modalOpen={openModalEdit} setmodalOpen={setopenModalEdit}>
              <form onSubmit={handleSubmitEditTodo} method="dialog">
                <h3 className="font-bold text-lg">Create task</h3>
                <div className="modal-action">
                <input value={taskToEdit} onChange={(e)=> settaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                <button type="submit" className='btn btn-primary'>Submit</button>
                </div>
              </form>
              </Modal>
              <GoTrash className='text-red-600 rounded-lg border-spacing-6 hover:bg-red-700 hover:text-black hover:border-spacing-6' cursor='pointer' size={25}/>
            </td>
      </tr>
  )
}

export default Task