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

  handleClick(event){
    this.setState({counter: ++this.state.counter})
  }

  handleClickOne(event){
    this.setState({counter: +2+this.state.counter})
  }

  handleClickTwo(event){
    this.setState({counter: +5+this.state.counter})
  }

  handleClickThree(event){
    this.setState({counter: +10+this.state.counter})
  }

  handleClickFour(event){
    this.setState({counter: +20+this.state.counter})
  }

  handleClickFive(event){
    this.setState({counter: +50+this.state.counter})
  }

  handleSecound(event){
    this.setState({counter: setInterval(++this.counter,1000)})

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
              onClick={this.handleClick.bind(this)} />
          </div>
          <ul>
            <li
              onClick={this.handleClickOne.bind(this)}>
              +1
            </li>
            <li
              onClick={this.handleClickTwo.bind(this)}>+5</li>
            <li
              onClick={this.handleClickThree.bind(this)}>+10</li>
            <li
              onClick={this.handleClickFour.bind(this)}
            >+20</li>
            <li
              onClick={this.handleClickFive.bind(this)}
            >+50</li>
          </ul>

          <ul>
            <li
              onClick={this.handleSecound.bind(this)}>1</li>
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
