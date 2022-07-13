import React from 'react';
import App from "../App.js";

class Counter extends React.Component{
    render(){
        return(
            <>
              <h1 className='m-4'>Counter</h1>
              <div className="d-flex justify-content-center p-2 m-5">
              <button type="button" className="btn btn-danger p-4" onClick={this.props.incrementation}>-</button>
              <h2 className='p-4'>{this.props.count}</h2>
              <button type="button" className="btn btn-success p-4" onClick={this.props.substract}>+</button>
              </div>
            </>
          )
    }
}

export default Counter