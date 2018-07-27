import React from 'react'
import Punto from '../containers/punto.js'

function Puntos(props) {
  return(
    <div className="Puntos">
      {
        prop.canchas.map((item)=>{
          return(
            <Punto
              key={item.id}
              {...item}
            />
          )
        })
      }
    </div>
  )
}

export default Puntos
