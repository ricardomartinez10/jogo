import React from 'react'
import './title.css'
function Title(props) {
  return(
    <div className="Title-container">
      <h2 className="Title">{props.title}</h2>
    </div>
  )
}

export default Title;
