import React from 'react';
import '../App.css';
import { PKnife } from '../assets/assetsImport';

function Home() {
  return (
    <div class='homeCont'>
      <img class="animate" src={ PKnife } alt="I'm handy like a pocket knife" />
    </div>
  );
}

export default Home;