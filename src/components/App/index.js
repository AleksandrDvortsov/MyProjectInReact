import React from 'react';
import './style.scss';
import Router from '../../system/Router';
import Header from '../Header';

function App() {
  return (
    <div id="app">
      <Header/>
      <div className="page">
        <Router />
      </div>
    </div>
  );
}

export default App;
