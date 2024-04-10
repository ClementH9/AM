import React from 'react';
import '../../index';
import Header from '../../components/home-banner/home-banner';
import Menu from '../../components/menu/menu';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
      </div>
    </>
  )
}

export default App;