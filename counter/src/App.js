import './App.css';
import React from 'react';
import Counter from './compoments/Counter.js';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
       count: 0,
      }
  }
  incrementation=()=>{
      if(this.state.count>0){
        this.setState({
          count: this.state.count -1
        })
      }
    }
    decrementation =()=>{
      this.setState({
        count: this.state.count +1
      })
  }
  

  render() { 
    return(
    <Counter count={this.state.count} incrementation={this.incrementation} substract={this.decrementation}/>
  )}


}

export default App
