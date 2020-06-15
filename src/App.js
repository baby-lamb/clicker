import React from 'react';
import './App.css';
import cookie from './img/cookie.png';
import shop from './img/shop.png';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter : 5000,
      x : 1,

    }
  }


  handleClick(click, x){
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn,
      isOn: true,
    });

    if( this.state.counter > x ){
      this.setState({counter: +click+this.state.counter})
      this.setState({counter: this.state.counter-x})
      this.setState({x : this.state.x*0+click})

    }
    else{
      alert("Don't have a Cookie");
    }
  }

  handleMultiply(multiply, y){
    const { isOn } = this.state;
    this.setState({
      isOn: !isOn,
    });
    if( this.state.isOn !== true && this.state.counter >= y ){
    this.setState({counter: multiply*this.state.counter})
    this.setState({counter: this.state.counter-y})
    this.setState({className: this.state.isOn ? 'off' : null })
    }
    else if( this.state.isOn === true && this.state.counter > y ){
      alert("이미 구매했습니다.")
    }
    else if( this.state.isOn !== true && this.state.counter < y ){
      alert("쿠키가 부족합니다.")
    }
  }

  handleCookieClick(x){
    this.setState({counter: this.state.counter+x})
  }

  render(){

    return (
      <div className="App">
        <div className="haveCookie">
          {this.state.counter} cookie!
        </div>
          <div className="plusCookie">+ 100 cookie</div>
          <div className="cookie">
            <img src={cookie} value="cookie"
              onClick={this.handleCookieClick.bind(this, this.state.x)}/>
          </div>
            <ul className="shop">
              <li><img src={shop} ></li>
              <li><img src={shop} className={this.state.isOn ? 'see' : 'none'} /></li>
              <li><img src={shop} className={this.state.isOn ? 'see' : 'none'} /></li>
              <li><img src={shop} className={this.state.isOn ? 'see' : 'none'} /></li>
              <li><img src={shop} className={this.state.isOn ? 'see' : 'none'} /></li>
            </ul>
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
              onClick={this.handleClick.bind(this, 10, 500)}>
                500
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
              onClick={this.handleClick.bind(this, 50, 1000)}
              className={this.state.isOn ? 'off' : null } >
                1000
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 1000)}

              >+1/s
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 2000)}

              >+2/s
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 3000)}

              >+3/s
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 4000)}

              >+4/s
              </a>
            </li>
            <li>
              <a
              onClick={this.handleMultiply.bind(this, 2, 5000)}

              >+5/s
              </a>
            </li>
          </ul>

      </div>
    );
  }
}


export default App;
