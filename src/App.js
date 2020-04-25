import React from 'react';
import './App.css';
import cookie from './img/cookie.png';

class App extends React.Component {
  constructor(props){
    super(props)
    const click=[2, 5, 10];
    this.state = {
      counter : 0,
    }
  }

  handler(evnet){

  }

  handleClick(event){
    this.setState({counter: ++this.state.counter})

  }
  handleClickOne(event){
    this.setState({counter: +2+this.state.counter})
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
              onClick={this.handleClick.bind(this)}
              >
              +1
            </li>
            <li
              onClick={this.handleClick.bind(this)}
              >+5</li>
            <li
              >+10</li>
            <li

            >+20</li>
            <li

            >+50</li>

          </ul>

          <ul>
            <li
              >1</li>
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
