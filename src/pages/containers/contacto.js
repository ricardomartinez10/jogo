import React, { Component } from 'react'
import ContactoLayout from '../../contacto/components/contactoLayout'
import contactoImg from '../../../img/contacto.png'

class Contacto extends Component{
  render(){
    return(
      <div className="Container">
        <ContactoLayout img={contactoImg} title="CONTACTO"/>
      </div>
    )
  }
}
export default Contacto;
