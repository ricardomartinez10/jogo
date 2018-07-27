import React, {Component} from 'react'
import DetalleLayout from '../components/detalle-layout.js'

class Detalle extends Component{
  render(){
    return(
      <DetalleLayout
         detail={this.props.detail}
         visibleDetail={this.props.visibleDetail}
         visibleInstruc={this.props.visibleInstruc}
        >
      </DetalleLayout>
    )
  }
}
export default Detalle
