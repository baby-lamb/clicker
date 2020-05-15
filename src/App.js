import React from 'react';
import './App.css';
import cookie from './img/cookie.png';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter : 0,
    }
  }

  handleClick(click){
    this.setState({counter: +click+this.state.counter})
  }
  handleMultiply(multiply, x){
    this.setState({counter: multiply*this.state.counter})
    this.setState({counter: this.state.counter-x})
  }

  render(){

    return (
      <div className="App">
        <div
          className="haveCookie"
          {this.state.counter}
          >
          {this.state.counter} cookie!
        </div>

          <div className="cookie">
            <img src={cookie} value="cookie"
              onClick={this.handleClick.bind(this)}/>
          </div>
          <ul>
            <li
              onClick={this.handleClick.bind(this, 1)}
              >
              100
            </li>
            <li
              onClick={this.handleClick.bind(this, 5)}
              >200</li>
            <li
              onClick={this.handleClick.bind(this, 10)}
            >400</li>
            <li
              onClick={this.handleClick.bind(this, 20)}
            >800</li>
            <li
              onClick={this.handleClick.bind(this, 50)}
            >1000</li>
          </ul>

          <ul>
            <li
              onClick={this.handleMultiply.bind(this, 2, 100)}
              >x2</li>
            <li
              onClick={this.handleMultiply.bind(this, 3, 200)}>x3</li>
            <li
              onClick={this.handleMultiply.bind(this, 4, 300)}
            >x4</li>
            <li
              onClick={this.handleMultiply.bind(this, 5, 400)}>x5</li>
            <li
              onClick={this.handleMultiply.bind(this, 6, 500)}>x6</li>
          </ul>
          <ul>
            <li
              onClick={}>1</li>
            <li
              onClick={}>2</li>
            <li
              onClick={}>3</li>
            <li
              onClick={}>4</li>
            <li
              onClick={}>5</li>
          </ul>
      </div>
    );
  }
}


export default App;
