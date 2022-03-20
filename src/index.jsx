import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dress from './components/Dress';

const App = () => (

  <div className="container">
    <Header title="Móda"></Header>
    <Dress></Dress>
    <Footer year={2022} author="Jirinka"></Footer>

  </div>
);

render(<App />, document.querySelector('#app'));
