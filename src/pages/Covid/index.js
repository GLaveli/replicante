import React from 'react';
import Header from '../../components/Navbar';
import Timeline from '../../components/Timeline';

import './styles.css';

function Home() {
  return (
    <>
      <Header />
      <div className="visible-area">
        <div className="covid">
          <h1>Covid - 19</h1>
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default Home;