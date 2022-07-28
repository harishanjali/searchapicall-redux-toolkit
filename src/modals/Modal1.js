import React from 'react'

export default function Modal1(props) {
   const {closeModal} = props
  return (
    <div className={`modal d-block`} id="modal1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">This is Modal number one</h5>
        <button type="button" className="btn-close" onClick={()=>closeModal('modal1')}></button>
      </div>
      <div className="modal-body">
        Modal Descritption
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={()=>closeModal('modal1')}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}
