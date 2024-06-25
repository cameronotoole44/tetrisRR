import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import Controls from './components/Controls';
import Board from './components/Board';
import MessagePopup from './components/MessagePopup';
import NextBlock from './components/NextBlock';
import Score from './components/Score';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris with React Redux!</h1>
        </header>
        <Board />
        <NextBlock />
        <Score />
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;
