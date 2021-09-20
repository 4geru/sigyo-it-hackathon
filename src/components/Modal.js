import * as React from 'react'

const Modal = ({ modalId, children, buttonText }) => {
  return (
    <>
      <label htmlFor={modalId} className="btn btn-primary modal-button w-40 m-2">{buttonText}</label>
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
