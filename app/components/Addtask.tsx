'use client'

import {AiOutlinePlus} from 'react-icons/ai'
import Modal from './Modal'
import {useState} from 'react';

const Addtask = () => {

  const [modalOpen , setmodalOpen] = useState(false);
  return (
    <div>
    <button onClick={()=> setmodalOpen(true)} className='btn btn-primary w-full'>Add new task<AiOutlinePlus size={20}/></button>

    <Modal modalOpen={modalOpen} setmodalOpen={setmodalOpen}/>
    </div>
  )
}

export default Addtask