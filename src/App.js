import React from 'react';
import './App.css';


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
          onClick={this.handleClick.bind(this)}
          className="btn">
          click {this.state.counter} times !
          </button>
      </div>
    );
  }
}


export default App;
