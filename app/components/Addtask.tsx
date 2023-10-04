'use client'

import {AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal'
import {FormEventHandler,useState} from 'react';
import {addTodo} from '@/api'

const Addtask = () => {

  const [modalOpen , setmodalOpen] = useState(false);
  const [newTaskValue, setnewTaskValue] = useState("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e)=>{
    e.preventDefault();
    await addTodo({
        isDone: false,
        id: '2',
        text: newTaskValue
      });
    setnewTaskValue("");
    setmodalOpen(false);
  }

  return (
    <div>
    <button onClick={()=> setmodalOpen(true)} className='btn btn-primary w-full'>Add new task<AiOutlinePlus size={20}/></button>

    <Modal modalOpen={modalOpen} setmodalOpen={setmodalOpen}>
    <form onSubmit={handleSubmitNewTodo} method="dialog">
      <h3 className="font-bold text-lg">Create task</h3>
      <div className="modal-action">
      <input value={newTaskValue} onChange={(e)=> setnewTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
      <button type="submit" className='btn btn-primary'>Submit</button>
      </div>
    </form>
    </Modal>
    </div>
  )
}

export default Addtask