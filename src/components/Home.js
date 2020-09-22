import React from 'react';
import '../App.css';
import { PKnife } from '../assets/assetsImport';


function Home() {
  return (
    <div class='homeCont'>
      <style>{'body { background-color:  #0000FF; }'}</style>
      <img src={ PKnife } className='knife' alt="I'm handy like a pocket knife" />
    </div>

  );
}

export default Home;