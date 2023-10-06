"use client";

import { ITask } from '@/types/task'
import React, { useState, FormEventHandler} from 'react'
import Modal from './Modal'
import { deleteTodo, editTodo } from '@/api';
import { useRouter } from 'next/navigation';
import {FiEdit} from 'react-icons/fi'
import {GoTrash} from 'react-icons/go'


interface TaskProps{
    task : ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
    const [openModalEdit, setopenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setopenModalDelete] = useState<boolean>(false);
    const [taskToEdit, settaskToEdit] = useState(task.text);

    const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e)=>{
      e.preventDefault();
      await editTodo({
          isDone: false,
          id: task.id.toString(),
          text: taskToEdit
        });
      settaskToEdit("");
      setopenModalEdit(false);
      router.refresh();
    }

    const handleSubmitDeleteTodo = async(id: string) => {
      await deleteTodo(id);
      setopenModalDelete(false);
      router.refresh();
    } 

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
                <h3 className="font-bold text-lg">Edit task</h3>
                <div className="modal-action">
                <input value={taskToEdit} onChange={(e)=> settaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                <button type="submit" className='btn btn-primary'>Save</button>
                </div>
              </form>
              </Modal>

              <GoTrash onClick={()=>setopenModalDelete(true)}  className='text-red-600 rounded-lg border-spacing-6 hover:bg-red-700 hover:text-black hover:border-spacing-6' cursor='pointer' size={25}/>
              <Modal modalOpen={openModalDelete} setmodalOpen={setopenModalDelete}>
                <h3 className="font-bold text-lg">Delete task?</h3>
                <div className="modal-action justify-around">
                  <p className='text-lg '>The task {task.text} will be deleted</p>
                <button onClick={()=> handleSubmitDeleteTodo(task.id)} type="submit" className='btn btn-error'>Confirm</button>
                </div>
              </Modal>
            </td>
      </tr>
  )
}

export default Task