import React from 'react';
import '../App.scss';
import { Me } from '../assets/assetsImport';
import { Linked } from '../assets/assetsImport';
import { Git } from '../assets/assetsImport';

function About() {
  return (
    <div>
      <img className="me" src={ Me } alt="this is me" />
      <div className='homeAboutText2'>
      <h1>Hi,<br></br><div class="nameWeight">I'm Rachel de la Torre.</div></h1>
        <h3>I have a degree in Graphic design from Central Saint Martins and 5+ years work experience as a creative developing UX & UI and Motion Graphics for advertising and digitalization agencies. Most recently I completed a Full Stack Web Development boot-camp at Iron hack in the hopes to take my skills next level. </h3>
        <div className='Weblinks'>
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