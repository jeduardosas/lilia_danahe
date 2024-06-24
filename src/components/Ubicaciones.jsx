import React from 'react'


const Ubicaciones = ({cardCeremoniaVisible,cardRecepcionVisible}) => {
  
  return (
    <>
      <div className="ubicaciones-title centrar">
          <img src="/img/icons/ubicacion.svg" alt="" />
          <h3>Ubicaciones</h3>
      </div>
      <div className="ubicaciones-cards">
        <div id='cardCeremoniaSection' className={`ubicaciones-card_card sombra ${cardCeremoniaVisible && 'animate__animated animate__fadeInLeft'}`}>
          <div>
            <h3 className='card-title'>Ceremonia Religiosa</h3>
          </div>

          <div className='card_icon'>
            <img src='/img/icons/iglesia.svg' alt="icon-church" />
          </div>

          <div>
            <p className='card-hora'>19:00 Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>Templo Expiatorio San Miguel Arcangel</p>
            <p className='card-contenido'></p>
            <p className='card-contenido'></p>
            <p className='card-from'>Iguala de la Independencia, Guerrero.</p>
          </div>
          <div className='card-button'>
            <button>
              <a href="https://maps.app.goo.gl/QcNPaCDwA6TXCBNPA" target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>

        <div id='cardRecepcionSection' className={`ubicaciones-card_card sombra ${cardRecepcionVisible && 'animate__animated animate__fadeInRight'}`}>
          <div >
            <h3 className='card-title'>Recepción</h3>
          </div>

          <div className='card_icon'>
            <img src="/img/icons/corona.svg" alt="" />
          </div>

          <div>
            
            <p className='card-hora'>21:00 Horas</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>Salón El Dorado</p>
            <p className='card-contenido'>Calle B Numero 4, Cd. Industrial</p>
            <p className='card-from'>Iguala de la Independencia, Guerrero.</p>
          </div>
          <div className='card-button'>
            <button>
              <a href="https://maps.app.goo.gl/2uiQuzVwWwEAvqam9" target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Ubicaciones