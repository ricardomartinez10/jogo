import React, { Component } from 'react';
import './zona.css';
import PuntoZona from '../components/punto-zona'

class Zona extends Component{
  state={
    zona:"sur",
    activo:false
  }
  cambiarZona = (event) =>{
    console.log(event.target.attributes);
    let lugar=event.target.attributes.lugar.nodeValue;
    this.setState({
      zona:lugar
    })
    this.props.lugarSeleccionado(lugar);

  }
  prueba=()=>{
    console.log('holi');
  }

  render(){
    return(
      <div className="Contenedor-Zona">
        <PuntoZona asignarZona={this.cambiarZona} lugar="sur"/>
        <PuntoZona asignarZona={this.cambiarZona} lugar="norte" />
        <PuntoZona asignarZona={this.cambiarZona} lugar="este" />
        <PuntoZona asignarZona={this.cambiarZona} lugar="oeste" />
      </div>

    )
  }
}
export default Zona;
