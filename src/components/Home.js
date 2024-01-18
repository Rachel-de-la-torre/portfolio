import React, { useEffect } from 'react';
import '../App.scss';
import Loading from './Loading';
import Kleyer from './Kleyer';
import Siemens from './Siemens';
import Mini from './Mini';
import Nivea from './Nivea';
import Oromo from './Oromo';
import Asahi from './Asahi';
import Reel from './Reel';
import AllProj from './AllProj';
import lottie from "lottie-web";
import {KnifeInv, mknife} from '../assets/assetsImport';
import About from './About';
import {Ticker} from 'react-ticker-tape'

export default function Home() {
  {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#knife"),
      animationData: KnifeInv,
    });
  }, []);
    useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#mknife"),
      animationData: mknife,
    });
  }, []);
  return (
    <div>
        <section className='homeLoad'>
          <Loading />
          <div id="knife" />
        </section>
          <Ticker text='STUDO IOR IS THE COOLEST DESIGN STUDIO IN BERLIN!' />
          <Asahi />
          <Mini />
          <Nivea />
          <Siemens />
          <Reel />
          <Oromo />
          <Kleyer />
          <About />
          {/* <AllProj />           */}
    </div>
  );
}

