import React from 'react'
import './detalle.css'

function Detalle(props) {
  return(
    <div className="Detalle">
      <h2 className="Titulo">Detalles</h2>
      <div className={props.visibleInstruc}>
        <p className="Instruc">Selecciona un punto en el mapa <br/>para obtener todo los detalles</p>
      </div>
  <div className={props.visibleDetail}>
    <div className="Contenedor-Detalle">
      <img className="Imagen" src={props.detail.img} alt=""/>
      <p><span className="Descrip">Nombre : </span>{props.detail.nombre}</p>
      <p><span className="Descrip">Direccion : </span>{props.detail.direccion}</p>
      <p><span className="Descrip">Hora atencion : </span>{props.detail.atencion}</p>
        <p><span className="Descrip">Telefono : </span>{props.detail.telefono}</p>
    </div>
  </div>


      {props.children}
    </div>
  )
}
export default Detalle;
