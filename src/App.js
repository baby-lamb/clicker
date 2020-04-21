import React from 'react';
import './App.css';
import cookie from './img/cookie.png';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter : 0
    }
  }
  handleClick(event){
    this.setState({counter: ++this.state.counter})
  }
  render(){
    return (
      <div className="App">
        <button
          className="btn">
          {this.state.counter} cookie!
          </button>
          <div className="cookie">
            <img src={cookie} value="cookie"
              onClick={this.handleClick.bind(this)} />
          </div>
          <ul>
            <li>+1</li>
            <li>+5</li>
            <li>+10</li>
            <li>+20</li>
            <li>+50</li>
          </ul>

          <ul>
            <li>1</li>
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
