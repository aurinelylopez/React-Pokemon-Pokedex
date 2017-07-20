import React, { Component } from 'react';
import './App.css';
import Left from './Left';
import Right from './Right';

class Container extends Component {
	constructor(props) {
		 super(props);
		this.state = {
    	id: null,
    	selected : null,
      ability:[],
      name:null,
      weight:null,
    }
    this.selectone = this.selectone.bind(this);
};

   
selectone(id){
    this.setState({id}, function () {
    console.log(this.state.id);});;
  	}
  	
    

  render() {
    console.log(this.state.id)
    return (
      <div className="Container">
        <Left selectone={this.selectone} />
        <Right id={this.state.id} />
      </div>
    );
  }
}

export default Container;