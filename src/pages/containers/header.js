import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../../img/logo.png'

class Header extends Component{
  render(){
    const { title, items } = this.props;
    return(
       <div className="Menu">
        <h1 className="Logo"><img className="Logo-img" src={logo} alt=""/></h1>
        <nav className="Barra-navegacion">
          <ul>
            {
              items && items.map(
                (item, key) => <li className="Item-menu" key={key}>
                  <Link className="Item-link" to={{
                    pathname:item.url,
                    state:{
                      mapa:true
                    }
                  }}>{item.title}</Link></li>
              )
            }
          </ul>
        </nav>

        </div>





    )
  }
}
export default Header;
