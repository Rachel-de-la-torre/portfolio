import React from 'react';
import '../App.css';
import { PKnife } from '../assets/assetsImport';
import Projects from './Projects';
import { Link } from "react-router-dom";



function Home() {
  return (
    <div class='homeAll'>
      <div class='homeCont'>
        <style>{'body { background-color:  #0000FF; }'}</style>
        <img src={ PKnife } className='knife' alt="I'm handy like a pocket knife" />
      </div>
      <div class='homeAbout'>
        <h1>Hi i'm Rachel de la Torre</h1>
        <h2>I'm a UX UI designer coming from a media design background!</h2>
        <h3>I am a hybrid designer with a passion for learning, crafting outcomes using every tool in my belt</h3>
        <Link to="/about">More about me</Link>
      </div>
      <Projects/>
    </div>

  );
}

export default Home;