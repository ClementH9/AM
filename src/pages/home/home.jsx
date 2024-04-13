import React from 'react';
import HomeBanner from '../../components/home-banner/home-banner';
import Menu from '../../components/menu/menu';

function Home() {
  return (
    <>
      <div className="container">
        <HomeBanner />
        <p className="presentation">Organisateur de Bachelor et Bachelorette party depuis 2071</p>
        <Menu />
      </div>
    </>
  );
}

export default Home;
