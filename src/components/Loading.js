import React from 'react';
import { Link } from "react-router-dom";
import { scroll } from '../assets/assetsImport';


export default function Loading() {
    {
        window.scrollTo(0, 0)
      }
    return (  
        <div className='homeAboutText'>
             <h1>Hi,<br></br> <div><Link class="linknexttext" to="/about">I'm Rachel de la Torre.</Link></div></h1>
             <h3>I'm a Graphic and Motion Designer with 8+ years experience in for advertising.</h3>
             <Link className="linknexttext" to="/about">MORE</Link> 
             <img className="button scroll" src={scroll} />
        </div>
    )
}
