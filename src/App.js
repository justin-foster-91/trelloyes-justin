import React, { Component } from 'react';
import STORE from './store.js';
import Lists from './Lists/Lists';
import './App.css';
// How am I screwing up my imports from within a folder?

class App extends Component {
  state = {
    Store: STORE
  }

  render() {
    const lists = this.state.Store.lists;
    const listArray = lists.map((item, i) => {
      return(
        <Lists
          key={`List ${i}`}
          listId= {lists[i].id}
          listHeader={lists[i].header}
          listContent={lists[i].content}
        />
      )
    });

    return (
      <div>
        <h1>Trelloyes!</h1>
        {listArray}
      </div>
    );
  }
}

export default App;