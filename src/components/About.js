import React from 'react';
import '../App.css';
import { Me } from '../assets/assetsImport';
import { Linked } from '../assets/assetsImport';
import { Git } from '../assets/assetsImport';

function About() {
  return (
    <div>
      <img className="me" src={ Me } alt="this is me" />
      <div className='about'>
        <h2>Hello! My name is</h2>
        <h1>RACHEL de la Torre</h1>
        <p>I have a degree in Graphic design from Central Saint Martins and 5+ years work experience as a creative developing UX & UI and Motion Graphics for advertising and digitalization agencies. Most recently I completed a Full Stack Web Development boot-camp at Iron hack in the hopes to take my skills next level. </p>
        <div className='links'>
          <a href="https://www.linkedin.com/in/rachel-de-la-torre-90383573/">
            <img src={ Linked } alt='linkedIn' />
          </a>
          <a href="https://github.com/Rachel-de-la-torre">
            <img src={ Git } alt='GitHub' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;