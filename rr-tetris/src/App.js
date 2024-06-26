// App.js
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
      <div className="container mx-auto p-4">
        <header className="text-center bg-gray-800 text-white py-3">
          <h1 className="text-2xl">Tetris with React Redux!</h1>
        </header>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-2">
            <NextBlock />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <Board />
          </div>
          <div className="w-full md:w-1/3 p-2">
            <Score />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Controls />
        </div>
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;

