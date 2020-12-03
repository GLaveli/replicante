import React from 'react';
import Header from '../../components/Navbar';

import './styles.css';

function Home() {
  return (
    <>
      <Header />
      <div className="visible-area">
        <h1>Bem vindo</h1>
        <p>Você pode negar a realidade é a sua escolha, mas isso não vai fazer com que ela deixe de existir</p>
      </div>
    </>
  );
}

export default Home;