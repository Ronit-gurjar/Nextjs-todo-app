interface ModalProps{
    modalOpen: boolean;
    setmodalOpen: (open: boolean)=> boolean | void;
    children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({modalOpen, setmodalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen? "modal-open": ""}`}>
    <div className="modal-box relative">
      <button onClick={()=> setmodalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      {children}
    </div>
    </div>
  )
}

export default Modal