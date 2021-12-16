import React from 'react';
import Ico from "./img/icono-akoplo-1.png";

const Contact = () => {
       return (
              <div className="contact">
                     <h1><img className='imgLogin' src={Ico}/>Contáctanos </h1>
                     <p>Se parte de esta relovución y ayúdanos a cuidar nuestro planeta</p> 
                     <ul>
                            <il className='contactData'><a href="mailto:info@akoplo.com">Escríbenos: info@akoplo.com</a></il>
                            <il className='contactData'><a href="tel:+573003900909">Llámanos: 300 3900909</a></il>
                            <il className='contactData'>Colombia</il>
                     </ul>
              </div>
       )
}

export default Contact