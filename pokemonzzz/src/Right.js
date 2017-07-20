import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Right extends Component {
constructor(props) {
    super(props);
    this.state = {
      data: [],
      ability: [],
      weight: null,
      name:null,
    };
    this.showdata= this.showdata.bind(this);
    this.componentWillReceiveProps= this.componentWillReceiveProps.bind(this);
}

showdata(id) {
    console.log(id);
    let targetURL = "http://pokeapi.co/api/v2/pokemon/"+(id+1);
        axios.get(targetURL)
    .then((res) => {
      console.log(res)
      var name=res.data.name;
      console.log(name)
      var abilities=res.data.abilities;
      var ability = abilities.map(function(a) {return a.ability.name;});
      console.log(ability)
      var weight=res.data.weight;
      console.log(weight)
      this.setState({ability});
      this.setState({weight});
      this.setState({name});

    })

 }


componentWillReceiveProps(){
  const id= this.props.id;
  console.log(id);
this.showdata(id);
}




render() {
    return (
      <div  className="Right">
      <h1>Name:{this.state.name}</h1>
      <h1>Weight:{this.state.weight}</h1>
      <h1>Ability 1:{this.state.ability[0]}</h1>
      <h1>Ability 2:{this.state.ability[1]}</h1>
      </div>
    );
  }
}

export default Right;