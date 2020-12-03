import React from 'react';
import { Link } from 'react-router-dom';
import { CgPill } from 'react-icons/cg';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <main>
          <h1 className="white-font">Replicante</h1>

          <p className="white-font">Se escolher o
          <spam className="red-font"> vermelho</spam>,
           continuará no País das Maravilhas e eu mostrarei a
           <spam className="red-font"> profundidade da toca do coelho.</spam>
          </p>
        </main>

        {/* Você precisa entender, a maioria destas pessoas não está preparada
         para despertar. E muitas delas estão tão inertes, tão desesperadamente
          dependentes do sistema, que irão lutar para protegê-lo. */}

        <div className="button-container">
          <Link to="/home" className="enter-app">
            <CgPill className="pill" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Landing;