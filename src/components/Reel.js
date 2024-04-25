import React from 'react';
import { Link } from "react-router-dom";

export default function Reel() {
  return <div className='project1'>
            <div className='homeAboutText2'>
                    <h1>MY REEL</h1>
                    <div className="descriptionlink">
                        <h2>Heres a selection of some spots I've contributed post production on.</h2>
                    </div>
                    <Link className="linknexttext" to="/motion">SAMPELS</Link>
            </div>
             <div className='ProjCardVID' >
                <iframe src="https://player.vimeo.com/video/205921835?h=1f219c4444"  width="620" height="348.75" allow="autoplay; fullscreen; picture-in-picture" ></iframe>
             </div>
        </div>;
}
