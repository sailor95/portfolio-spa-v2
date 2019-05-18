import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './store';
import Main from './components/main/Main';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
