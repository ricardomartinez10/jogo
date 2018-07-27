import React, { Component } from 'react'
import Content from './content.js'
import Header from './header.js'
// Data
import items from '../../data/data';

class App extends Component{
  render(){

    return(
      <div>
        <Header
          items={items}
        />

       <Content body={this.props.children}/>
      </div>
    )
  }
}
export default App
