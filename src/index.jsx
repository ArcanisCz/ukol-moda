import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';

const App = () => (

  <div className="container">
    <Header title="Móda"></Header>

  </div>
);

render(<App />, document.querySelector('#app'));
