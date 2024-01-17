import React from 'react';
import {CK1, Asahi, mini1, niv1, oro1} from '../assets/assetsImport';
import { Link } from "react-router-dom";
import '../App.scss';

export default function Work() {
  return <div id='work'>
            {/* <h1 className='title'></h1> */}
            <section className='project2'>
                    <div className='textAllign'>
                        <Link className="linknexttext" to="/Asahi"> <img className='projectChild' src={Asahi} />ASAHI</Link>
                    </div>
                    <div className='textAllign'>
                        <Link className='linknexttext' to='/mini'><img className='projectChild' src={mini1} />MINI</Link>
                    </div>
                    <div className='textAllign'>
                        <Link className="linknexttext" to="/Nivea"><img className='projectChild' src={niv1} />NIVEA</Link>                         
                    </div>
                    <div className='textAllign'>
                        <Link className="linknexttext" to="/Oromo"><img className='projectChild' src={oro1} />OROMO</Link>
                    </div>
                    <div className='textAllign'>
                        <Link className="linknexttext" to="/klyer"><img className='projectChild'src={CK1} />CLOUD KLEYER</Link>
                    </div> 
            </section>
    </div>;
}

