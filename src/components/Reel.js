import React from 'react';
// import ReactPlayer from "react-player"

export default function Reel() {
  return <div className='project1'>
            <div className='homeAboutText2'>
                    <h1>MY REEL</h1>
                    <div className="descriptionlink">
                        <h2>Heres a selection of some spots I've contributed post production on.</h2>
                    </div>
                </div>
             <div className='ProjCardVID'>
                <iframe src="https://player.vimeo.com/video/205921835?h=1f219c4444" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
             </div>
        </div>;
}
