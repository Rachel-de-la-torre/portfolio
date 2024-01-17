import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {SNivea} from '../assets/assetsImport';


export default class Nivea extends Component {
    render() {
        return (
        <section className='project1'>
            <div className='homeAboutText2'>
                <h1>NIVEA</h1>
                <div className="descriptionlink">
                    <h2>Media design and branded social assets for Nivea on the digital campain for sensitive man stubble balm.</h2>
                    <div className='ProsProdLinks'>
                    {/* <a className="linknexttext" href="https://vimeo.com/video/368765804">PRODUCT</a>  */}
                    <Link to="/nivea">PROCESS</Link>
                    </div>
                </div>
            </div>
            <div>  
                <img className='ProjCardImg' src={SNivea} />  
            </div>  
        </section>
        )
    }
}
