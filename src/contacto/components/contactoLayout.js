import React from 'react'
import Title from '../../assets/components/title';
import './contacto.css'
import im from '../../../img/contacto.png'

function ContactoLayout(props) {
  return(
    <div className="Contacto-container">
      <Title title={props.title} />
      <img src={im} alt=""/>
    </div>
  )
}
export default ContactoLayout;
