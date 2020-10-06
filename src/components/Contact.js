import React from 'react';
import '../App.scss';
import { Call } from '../assets/assetsImport';
import { Linked } from '../assets/assetsImport';
import { Git } from '../assets/assetsImport';

function Contact() {


  return (
    <div className="contact"   style={{ backgroundImage: `url(${require("../assets/contact.png")})` }}
    >

      <h1>Call me on my cell phone.</h1>
      <h3>+49 1577285311</h3>
      <h3>Rachel.delatorre1@gmail.com</h3>
      {/* <img className="holine" src={Call} alt='hotline bling' /> */}
      <div className='Weblinks'>
          <a href="https://www.linkedin.com/in/rachel-de-la-torre-90383573/">
            <img src={ Linked } alt='linkedIn' />
          </a>
          <a href="https://github.com/Rachel-de-la-torre">
            <img src={ Git } alt='GitHub' />
          </a>
        </div>
    </div>
  );
}

export default Contact;