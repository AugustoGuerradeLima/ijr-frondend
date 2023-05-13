import React from 'react'
import "./PasswordModal.css"

function PasswordModal() {
  return (
    <div className="passwordModal">
        <h2 className= "modal-title">Nova Senha</h2>
        <form>
            <input
                className="old-password"
                type="password"
                placeholder="Senha atual"
            />
            <input
                className="new-password"
                type="password"
                placeholder="Nova senha"
            />
            <input
                className="confirm-new-password"
                type="password"
                placeholder="Confirmar nova senha"
            />


            <input className="cancel-btn" type="button" value="Cancelar"/>
            <input className="confirm-btn" type="submit" value="Confirmar" />
        </form>
    </div>
  )
}

export default PasswordModal