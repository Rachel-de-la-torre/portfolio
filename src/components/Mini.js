import React, { Component } from 'react';
import {SMini} from '../assets/assetsImport';


export default class Mini extends Component {
    render() {
        return (
            <section className='project1'>
                <div className='homeAboutText2'>
                    <h1>MINI</h1>
                    <div className="descriptionlink">
                        <h2>Media design and branded social assets for Mini Sport on the digital campain "Open more doors."</h2>
                        <a className="linknexttext" href="/mini">PROCESS</a>
                    </div>
                </div>
                <div>
                    <img className='ProjCardImg' src={SMini} /> 
                </div>
            </section>
        )
    }
}
