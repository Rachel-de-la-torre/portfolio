import React from 'react';
import '../App.scss';
import { Linked } from '../assets/assetsImport';
import { Git } from '../assets/assetsImport';

function Contact() {


  return (
    <div class='homeLoad'>
    <div className='homeAboutText'>
    <h1 className='title'>Don’t be shy, say hi!</h1>
      <h3>+49 15774285311</h3>
      <h3>rachel.delatorre1@gmail.com</h3>
      <div className='Weblinks'>

          <a target="_blank" href="https://www.linkedin.com/in/rachel-de-la-torre-90383573/">
            <img src={ Linked } alt='linkedIn' />
          </a>
          <a target="_blank" href="https://github.com/Rachel-de-la-torre">
            <img src={ Git } alt='GitHub' />
          </a>
        </div>
    </div>
    </div>
  );
}

export default Contact;