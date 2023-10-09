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



export default function Home() {
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
          <div id="mknife" />
        </section>
          <Asahi />
          <Mini />
          <Nivea />
          <Siemens />
          <Reel />
          <Oromo />
          <Kleyer />
          <AllProj />          
    </div>
  );
}

