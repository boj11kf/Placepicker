import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/* 
  Ahhoz, hogy ESC-el is ki lehessen lepni a dialog-bol
  szukseg van egy parameterul kapott onClose-ra is
*/

const Modal = ({open, children, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    open 
    ? dialog.current.showModal() 
    : dialog.current.close();
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
