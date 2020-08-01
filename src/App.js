import React, { Component } from 'react';
import STORE from './store.js';
import List from './List';

class App extends Component {
  state = {
    Store: STORE
  }

  render() {
    return (
      <div>
        <h1>Trelloyes!</h1>
        
      </div>
    );
  }
}

export default App;