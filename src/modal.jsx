import * as React from 'react'
import './index.css'

function Modal({ text }) {

  const isOpen = false

  const closeModal = (e) => {
    e.preventDefault()
    !isOpen
  }

  return (
    <div>
      <div className="modal-container">
        <div className="modal">
          <p className="modal-text">{text}</p>
          <button className="modal-close" onClick={() => closeModal()}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
