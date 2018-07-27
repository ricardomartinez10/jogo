import React, { Component } from 'react'
import '../components/maps.css'
//import Puntos from '../../puntos/components/puntos'
class Mapa extends Component {

  state={
    puntos:[],
    selected:{},
    iniciarMapa:false
  }
  componentDidMount(){
    window.initMap = this.initMap;

    setTimeout(function(){
      window.initMap();
    },200);

}
  handleClick=(event)=>{
  // this.props.itemSeleccionado(this.state.selected);
 }
    initMap=(event)=>{
     const map = new window.google.maps.Map(document.getElementById('map'), {
       center: {lat: 3.393146, lng:-76.533007},
       zoom: 15,
     });
     const lista=this.props.data.canchas;
     this.mostrarPuntos(map,lista);
   }

    mostrarPuntos=(map,lista)=>{
      for (var i = 0; i < lista.length; i++) {

        const myLatlng = new window.google.maps.LatLng(lista[i].latitud,lista[i].longitud);
        const marker = new window.google.maps.Marker({
            position: myLatlng,
            title:lista[i].nombre,
            id:lista[i].id,
        });
         marker.setMap(map);

         this.setState(prevState => ({
         puntos: prevState.puntos.concat(lista[i]),
        }));

         marker.addListener('click',(event)=>{

           this.setState({
             selected:this.state.puntos[(marker.id-1)],
           })
           this.props.itemSeleccionado(this.state.selected);
         })
      }
    }

  render(){
    return(
      <div id="map">
      </div>
    )
  }
}
export default Mapa;
