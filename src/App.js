import React from 'react';
import './App.css';
import cookie from './img/cookie.png';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter : 101,
      x : 0,
    }
  }

  handleClick(click, x){
    if( this.state.counter > x ){
      this.setState({counter: +click+this.state.counter})
      this.setState({counter: this.state.counter-x})
      var x = x;
    }
    else{
      alert("Don't have a Cookie");
    }
  }

  handleMultiply(multiply, y){
    if( this.state.counter > y ){
    this.setState({counter: multiply*this.state.counter})
    this.setState({counter: this.state.counter-y})
    }
    else{
      alert("Don't have a Cookie")
    }
  }

  handleCookieClick(x){
    this.setState({counter: this.stste.counter+x})
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
            <li>
              <a
              onClick={this.handleClick.bind(this, 1, 100)}>
                100
              </a>
            </li>
            <li>
              <a
              onClick={this.handleClick.bind(this, 5, 200)}>
                200
              </a>
            </li>
            <li>
              <a
              onClick={this.handleClick.bind(this, 10, 400)}>
                400
              </a>
            </li>
            <li>
              <a
              onClick={this.handleClick.bind(this, 20, 800)}>
                800
              </a>
            </li>
            <li>
              <a
              onClick={this.handleClick.bind(this, 50, 1000)}>
                1000
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 1000)}
              >x2
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 2000)}
              >x3
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 3000)}
              >x4
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 4000)}
              >x5
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 5000)}
              >x6
              </a>
            </li>
          </ul>

      </div>
    );
  }
}


export default App;
