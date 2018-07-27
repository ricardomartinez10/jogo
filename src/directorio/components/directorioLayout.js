import React from 'react';
import Title from '../../assets/components/title';
import Punto from '../../puntos/components/punto.js'
import './directorioLayout.css';
import Zona from '../../puntos/containers/zona';

function DirectorioLayout(props) {
  return(
    <div className="Container">
    <Title title={props.title} />
    <Zona lugarSeleccionado={props.lugarSeleccionado}/>
    <div className="Items-conteiner">
      {
        props.canchas.map((item)=>{
         return (
           <Punto
             key={item.id}
             {...item}
           />
         )

        })
      }
    </div>
    </div>

  )
}
export default DirectorioLayout;
