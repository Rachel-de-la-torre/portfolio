import React from 'react';
import { PKnife } from '../assets/assetsImport';
import { Link } from "react-router-dom";



export default function Loading() {
    return (
        <div class='homeAll'>
            <div class='homeCont'>
                <div className='homeAboutText'>
                    <h1>Hi <br></br>I'm Rachel de la Torre</h1>
                    <h2>I am a hybrid designer with a background in Media Design & UX/UI</h2>
                    <Link to="/about">MORE</Link>
                </div>
                <img src={ PKnife }  alt="I'm handy like a pocket knife" />
            </div>
        </div>
    )
}
