import React from "react";
import Botton from "./Botton";
import Login from "./Login";

const Banner = () => {
       return (
              <div className="banner">
                     <div className="bannera">
                            <h2> Somos una plataforma de reciclaje colectivo. </h2>
                            <h3>Únete a nuestra comunidad y ayúdanos a mejorar el planeta</h3>
                            <Botton/>
                     </div>
                     <div className="containerLogin">

                            <Login/>
                     </div>

              </div>
       )
}

export default Banner;