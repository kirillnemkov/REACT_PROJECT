import './Modal.css'
import { useState } from 'react'

const Modal = ({setModalActive, modalActive, children}) => {
    return (
        <div
            className={modalActive ? 'modalka active' : 'modalka'}
            onClick={() => setModalActive(false)}
        >
            <div
                className={
                  modalActive ? 'modalka__content active' : 'modalka__content'
                }
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal
