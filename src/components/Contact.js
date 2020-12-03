import React from 'react';
import '../App.scss';
import { Call } from '../assets/assetsImport';
import { Linked } from '../assets/assetsImport';
import { Git } from '../assets/assetsImport';

function Contact() {


  return (
    <div>
    <div className='homeAboutText2'>
    <h1 className='nameWeight'>Call me on my cell phone.</h1>
      <h3>+49 15774285311</h3>
      <h3>rachel.delatorre1@gmail.com</h3>
      <div className='Weblinks'>
          <a href="https://www.linkedin.com/in/rachel-de-la-torre-90383573/">
            <img src={ Linked } alt='linkedIn' />
          </a>
          <a href="https://github.com/Rachel-de-la-torre">
            <img src={ Git } alt='GitHub' />
          </a>
        </div>
        {/* <img className="holine" src={Call} alt='hotline bling' />  */}
    </div>
    </div>
  );
}

export default Contact;