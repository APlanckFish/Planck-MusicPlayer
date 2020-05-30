import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const t:string = 'test2222'

class App extends Component {
  state = {
    welcome: 'hello'
  }
  render() {
    return (
     <div>
        <h1>helloworld</h1>
        <h2>{t}</h2>
     </div>
    );
  }
}
export default hot(module)(App);