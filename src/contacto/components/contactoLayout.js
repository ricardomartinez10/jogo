import React from 'react'
import Title from '../../assets/components/title';
import './contacto.css'

function ContactoLayout(props) {
  return(
    <div className="Contacto-container">
      <Title title={props.title} />
      <img src={props.img} alt=""/>
    </div>
  )
}
export default ContactoLayout;
