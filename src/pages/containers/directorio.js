import React, { Component } from 'react'
import DirectorioLayout from '../../directorio/components/directorioLayout'
import data from '../../../api.json'


class Directorio extends Component{

  state={
    canchasModelo:data.canchas,
    listaCanchas:data.canchas,
    canchasArea:[]
  }

  lugarSeleccionado = (zona) =>{
    this.canchasPorArea(zona);

  }

  canchasPorArea=(lugar)=>{
    this.state.canchasModelo.map((item)=>{
     if(item.zona==lugar){
       this.setState({
         canchasArea:this.state.canchasArea.push(item)
       })
     }
    })

    this.setState({
      listaCanchas:this.state.canchasArea,
      canchasArea:[]
    })
  }

  render(){
    return(
      <div>
         <DirectorioLayout lugarSeleccionado={this.lugarSeleccionado} title="DIRECTORIO DE CANCHAS" canchas={this.state.listaCanchas} />
       </div>
    )
  }
}
export default Directorio
