import React from 'react'
import './punto.css'

function Punto(props) {
  return(
    <div className="Item-cancha">
      <h3 className="Item-titulo">{props.nombre}</h3>
      <div className="Detalles">
      <p className="Item-detalle">Direccion : {props.direccion}</p>
      <p className="Item-detalle">Telefono : {props.telefono}</p>
      <p className="Item-detalle">Pagina web : www.cancha.com</p>
      <p className="Item-detalle">Hora de atencion: {props.atencion}</p>
      </div>
    </div>
  )
}
export default Punto;
