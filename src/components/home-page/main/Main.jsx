import React from 'react'

import "./main.css";
import HomeTitle from '../home-title/HomeTitle';
import Tools from '../tools/Tools';
import BlockGray from '../block_grey/BlockGray';
import Footer from '../footer/Footer';

const Main = () => {

  return (
    <div className="main">
      
      <HomeTitle />
      <Tools />
      <BlockGray />
      <Footer />

    </div>
  )
}

export default Main