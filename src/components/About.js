import '../App.scss';
import {Linked2, Git2} from '../assets/assetsImport';
import React, { Component } from 'react';
import {Ticker} from 'react-ticker-tape'


export default class About extends Component {
  render() {
    return (
      <div className='project1'> 
      {/* <div className='ticker'>
        <Ticker bg="blue" color="white" fix="bottom" animationSpeed="20" text='HIRE ME!' />
        <Ticker fix="left" animationSpeed="20" text="!" />
        <Ticker bg="#dcfd1c" color="black" fix="right" animationSpeed="20" text="DREAM TEAM" />
      </div> */}
      <section className='aboutsect'>
      <div className='ProjAboutText'>
      <h1 style={{'font-size': '3em'}}>Hi,<br></br><div class="nameWeight">my name is Rachel de la Torre.</div></h1>
        <h3>Over the past seven years, I've worked in advertising and digital agencies, creating branded campaign assets for web, social media, and commercial campaigns. I studied graphic design at Central Saint Martins where I also first developed my moving image practice. 
          This pandemic I've been learning to code in order to add web design and SVG animation to my toolbox. For instance,<strong> I built this website using React and Node.js!</strong><br/><br/> 
          During my free time, I am a movie lover, With a special interest in horror films. What's your favorite spooky film?<br/><br/>Don’t be shy, say hi!<br/> +49 15774285311<br/>rachel.delatorre1@gmail.com       
        </h3>
        <div className='Weblinks'>
          <a href="https://www.linkedin.com/in/rachel-de-la-torre-90383573/" target="_blank">
            <img src={ Linked2 } alt='linkedIn' />
          </a>
          <a href="https://github.com/Rachel-de-la-torre" target="_blank">
            <img src={ Git2 } alt='GitHub' />
          </a>
        </div>
      </div>
    </section>
    </div>
    )
  }
}



