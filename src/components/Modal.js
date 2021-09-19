import * as React from 'react'

const Modal = ({ modalId, children }) => {
  return (
    <>
      <label htmlFor={modalId} className="btn btn-primary modal-button w-40">open modal</label>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
