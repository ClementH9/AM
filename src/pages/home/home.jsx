import React from 'react';
import HomeBanner from '../../components/home-banner/home-banner';
import Menu from '../../components/menu/menu';

function Home() {
  return (
    <>
      <div className="container">
        <HomeBanner />
        <Menu />
      </div>
    </>
  );
}

export default Home;
