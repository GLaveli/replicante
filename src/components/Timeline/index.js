import React from 'react';
import LeftCard from './leftCard';
import RightCard from './rightCard';

// import { Container } from './styles';

function Timeline() {
  return (
    <div className="timeline">

      <RightCard />
      <LeftCard />

    </div>
  );
}

export default Timeline;