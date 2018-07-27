import React, {Component} from 'react'
import HomeLayout from '../components/home-layout.js'
import Detalle from '../../detalles/containers/detalle.js'
import Mapa from '../../maps/containers/mapa.js'
import data from '../../../api.json'

class Home extends Component{

  state={
    item:{},
    visibleDetail:"Ocultar",
    visibleInstruc:"Mostrar"
  }
  itemSeleccionado = (punto)=>{
    this.setState({
      item:punto,
      visibleDetail:"Mostrar",
      visibleInstruc:"Ocultar"
    })
  }
  componentDidMount(){

  }
  render(){

    return(
      <HomeLayout>
        <div className="Info">
          Encuentra la cancha de futbol ideal de <br/>
          todas las opciones que te ofrece la ciudad
        </div>
        <Detalle
          detail={this.state.item}
          visibleDetail={this.state.visibleDetail}
          visibleInstruc={this.state.visibleInstruc}
          >
        </Detalle>
        <Mapa
          data={data}
          itemSeleccionado={this.itemSeleccionado}
        />
      </HomeLayout>

    )
  }
}
export default Home
