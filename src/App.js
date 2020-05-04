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
  handleMultiply(multiply){
    this.setState({counter: multiply*this.state.counter})
  }

  render(){

    return (
      <div className="App">
        <div
          className="haveCookie"
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
              +1
            </li>
            <li
              onClick={this.handleClick.bind(this, 5)}
              >+5</li>
            <li
              onClick={this.handleClick.bind(this, 10)}
            >+10</li>
            <li
              onClick={this.handleClick.bind(this, 20)}
            >+20</li>
            <li
              onClick={this.handleClick.bind(this, 50)}
            >+50</li>
          </ul>

          <ul>
            <li
              onClick={this.handleMultiply.bind(this, 2)}
              >x2</li>
            <li
              onClick={this.handleMultiply.bind(this, 3)}>x3</li>
            <li
              onClick={this.handleMultiply.bind(this, 4)}
            >x4</li>
            <li
              onClick={this.handleMultiply.bind(this, 5)}>x5</li>
            <li
              onClick={this.handleMultiply.bind(this, 6)}>x6</li>
          </ul>
          <ul>
            <li>11</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
      </div>
    );
  }
}


export default App;
