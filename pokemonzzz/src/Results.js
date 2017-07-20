import React, { Component } from 'react';

class Results extends Component{

  

  handleClick(key){
    this.props.selectone(key);
    
      }

  




  render() {
    var result=this.props.name.map((d,key) => {
      return(
              <li key={key} onClick={this.handleClick.bind(this,key)}  > {d} </li>
            )
  });

    return (

      <div>
        {result}
      </div>

    )
}
}


export default Results;