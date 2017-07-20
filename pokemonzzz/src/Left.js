import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Results from './Results'

class Left extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	value: '',
    	name: [],
    };
    this.showname = this.showname.bind(this);
}

showname() {
    let targetURL = "http://pokeapi.co/api/v2/pokemon?limit=150";
        axios.get(targetURL)
    .then((res) => {
    	var objArray=res.data.results
    	var name = objArray.map(function(a) {return a.name;});
       this.setState({name})
    })
 }

componentDidMount(){
this.showname();
}
  render() {
    return (
      <div className="Left">
      <ol>
      <Results name={this.state.name} {...this.props}/>
      </ol>
      </div>
    );
  }
}

export default Left;