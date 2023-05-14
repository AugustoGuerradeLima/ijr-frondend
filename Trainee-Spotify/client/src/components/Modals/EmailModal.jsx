import React from 'react'
import "./EmailModal.css"

function EmailModal(props) {
  const cancel = () =>{
    props.cancelChange()
  }
  return (
    <div className="emailModal">
      <h2 className= "modal-title">Novo E-mail</h2>
        <form>
            <input
                className="new-email"
                type="email"
                placeholder="Email"
                name="email"
            />
            <input className="cancel-btn" type="button" value="Cancelar" onClick={cancel}/>
            <input className="confirm-btn" type="submit" value="Confirmar" />
        </form>
    </div>
  )
}

export default EmailModal