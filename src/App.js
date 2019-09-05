import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
  state={
    text : '',
    array: ['tomato','potato']
  }

  StoreValue =(val)=>{
    this.setState({text : val.target.value})
  }
  PushToArray = ()=>{
    this.state.array.push(this.state.text)
   
    this.setState({text : ''})

  }
  Effacer = (index)=>{
    // console.log(index.target.id)
    document.getElementById(index.target.id).style.textDecoration = "line-through"
  }

  render(){
  return (
    <div className="App">
      <input value={this.state.text} onChange={this.StoreValue}/>
  <button onClick={this.PushToArray}>Add</button>
  <ul>
    {
      this.state.array.map((val,index)=><li id={index} onClick={this.Effacer.bind(index)}>{val}</li>)
    }
  </ul>
    </div>
  );
}
}


