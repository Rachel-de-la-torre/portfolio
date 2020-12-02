import React from 'react';
import { Link } from "react-router-dom";




export default function Loading() {
    return (
        <div class='LoadAll'>
                <div className='homeAboutText'>
                    <h1>Hi,<br></br><div class="nameWeight">I'm Rachel de la Torre.</div></h1>
                    <h3>I'm handy like a pocket knife, with a background in Media Design & UX/UI. </h3>
                    <Link to="/about">MORE</Link>
                </div>
                {/* <img src={ PKnife }  alt="I'm handy like a pocket knife"   I am a hybrid designer /> */}
        </div>
    )
}
