import { useState, useEffect } from "react"
import TypeWriter from "./TypeWriter"

const Header = () => {
  const [firstComplete,setFirstComplete] = useState(false);
  const text = 'Juntos comenzamos este viaje llamado'
  const text2 = `Para Siempre.`

  //este useEffect es para que se ejecute el segundo TypeWriter
  /* useEffect(()=>{
    const timer = setTimeout(()=>{
      setFirstComplete(true);
    },text.length * 120)
    return()=>clearTimeout(timer)
  },[]) */
  
  return (  

    
    <>
      <header className="header centrar">
          <div className="header-image">
            <img loading="lazy"  src='/img/img_header.webp' alt="img_kamila" />
          </div>
      </header>
      
       {/*  <div className="frase">
          <TypeWriter text={text} speed={1}/>
          {firstComplete && <TypeWriter text={text2} speed={1} />}
          
        </div> */}

        <div className="frase">
          <p className="frase-text">Los momentos felices de la vida</p>
          <p className="frase-text">se tornan gratos cuando tenemos la suerte</p>
          <p className="frase-text">de compartirlos con familiares y amigos.</p>
          <p className="frase-text">Tú estas entre ellos</p>
        </div>
      
      {/* <div  className='header-img centrar animate__animated animate__fadeInUp'>
      </div> */}
    </>
  )
}

export default Header