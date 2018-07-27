import React, { Component } from 'react';

class Content extends Component{
  render(){
    return(
      <div className="Content">
        {this.props.body}
      </div>
    )
  }
}

export default Content;
