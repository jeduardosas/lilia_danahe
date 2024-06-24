import React from 'react'

const Confirmacion = () => {
  return (
    <>
      <div className='confirmar-title'>
        <img src="/img/icons/confirmacion.svg" alt="icon-confirm" />
        <h2>Confirmación de Asistencia</h2>
      </div>

      <div className="confirmar-card  sombra">
        <div className="confirmar-border centrar">
          <div className="confirmar-whats">
            <img src="/img/icons/whats.svg" alt="" />
            <p>WhatsApp</p>
          </div>
          <button><a target="_blank" href="https://api.whatsapp.com/send?phone=527333362566&text=¡Hola!👋%0AQuiero%20confirmar%20mi%20asistencia%0Aa%20los%20XV%20de%20Lilia%20Danahe%20👑">CONFIRMAR</a></button>
        </div>
      </div>
    </>
  )
}

export default Confirmacion