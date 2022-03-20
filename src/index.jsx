import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dress from './components/Dress';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';

const App = () => (

  <div className="container">
    <Header title="Móda"></Header>
    <Dress />
    <Shoes />
    <Accessories />
    <Footer year={2022} author="Jirinka"></Footer>

  </div>
);

render(<App />, document.querySelector('#app'));
