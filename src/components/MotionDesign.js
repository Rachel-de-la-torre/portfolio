import {CKV1, CKV2, MHNV, MHNV2, MHNV3, HYT, minivid1, Ai, Pr, Ae} from '../assets/assetsImport';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import lottie from "lottie-web";

export default function MiniPage() {

    // useEffect(() => {
    //     lottie.loadAnimation({
    //       container: document.querySelector("W11"),
    //       animationData: W11,
    //     });
    //     }, []);
    return (
        <div className='projbkg'>
            <div className='ProjAboutText'>
            {
                window.scrollTo(0, 0)
            }
                <h1 class="nameWeight">MOTION DESIGN</h1>
                <div class='p-icon'>
                        <img class="p-icon-solo" src={Ai} />
                        <img class="p-icon-solo" src={Pr} />
                        <img class="p-icon-solo" src={Ae} />
                </div>
                <div class="animations">
                    <div className='playerwrapper'>
                        <ReactPlayer 
                        url= {CKV1}
                        loop = {true}
                        playing = {true}
                        width = "25vw"
                        />
                    </div>  
                    <div className='playerwrapper'>
                        <ReactPlayer 
                        url= {CKV2}
                        loop = {true}
                        playing = {true}
                        width = "50vw"
                        />
                    </div>  
                    <div style={{paddingLeft: '1%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {MHNV}
                        loop = {true}
                        playing = {true}
                        width = "35vw"
                        />
                    </div>  
                    <div style={{paddingLeft: '1%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {MHNV2}
                        loop = {true}
                        playing = {true}
                        width = "25vw"
                        />
                    </div>  
                    <div style={{paddingLeft: '2%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {MHNV3}
                        loop = {true}
                        playing = {true}
                        width = "25vw"
                        />
                    </div>  
                    <div style={{paddingLeft: '5%'}} className='playerwrapper'>
                        <ReactPlayer 
                        url= {HYT}
                        loop = {true}
                        playing = {true}
                        width = "25vw"
                        />
                    </div>  
                </div>
            </div>
        </div>
    )
}
