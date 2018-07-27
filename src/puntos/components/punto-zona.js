import React, { Component } from 'react'
import './punto-zona.css'

class PuntoZona extends Component{

  onClick=(event)=>{
    this.props.asignarZona(event);

    }
  render(){
    return(
      <button onClick={this.onClick} lugar={this.props.lugar} className="Zona-item">
        {this.props.lugar}
      </button>
    )
  }

}
export default PuntoZona
