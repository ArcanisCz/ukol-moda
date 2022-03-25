import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Footer from './components/Footer/index.jsx'
import Header from './components/Header/index.jsx'
import Dress from './components/Dress/index.jsx'
import Shoes from './components/Shoes/index.jsx'
import Accessories from './components/Accessories/index.jsx'



const App = () => {
  return (
    <div class="container">
      <Header />
      <Dress />
      <Shoes />
      <Accessories />

      <Footer author="Jenny Smith" year="2222" />
    </div>
  );
}

render(<App />, document.querySelector('#app'));






