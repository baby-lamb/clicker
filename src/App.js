import React from 'react';
import './App.css';
import cookie from './img/cookie.png';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter : 1,
    }
  }

  handleClick(click){
    if( Math.sign(this.state.counter) === 1 ){
      this.setState({counter: +click+this.state.counter})
    }
    else{
      alert("Don't have a Cookie");
    }
  }
  handleMultiply(multiply, x){
    this.setState({counter: multiply*this.state.counter})
    this.setState({counter: this.state.counter-x})
  }
  handleCookieClick(){
    const cookie = this.state.cookie.slice();
    cookie = this.state.counter;
    this.setState({cookie: cookie});
  }

  render(){

    return (
      <div className="App">
        <div
          className="haveCookie"
          onClick={this.handleCookieClick.bind(this)}
          >
          {this.state.counter} cookie!
        </div>

          <div className="cookie">
            <img src={cookie} value="cookie"
              onClick={this.handleClick.bind(this)}/>
          </div>
          <ul>
            <li
              onClick={this.handleClick.bind(this, 1, 100)}
              >
              100
            </li>
            <li
              onClick={this.handleClick.bind(this, 5, 200)}
              >200</li>
            <li
              onClick={this.handleClick.bind(this, 10, 400)}
            >400</li>
            <li
              onClick={this.handleClick.bind(this, 20, 800)}
            >800</li>
            <li
              onClick={this.handleClick.bind(this, 50, 1000)}
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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

          </ul>
      </div>
    );
  }
}


export default App;
