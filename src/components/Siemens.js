import React, { Component } from 'react'
import { Sie1 } from '../assets/assetsImport';
import { Link } from 'react-router-dom';
// import { Fun } from '../assets/assetsImport';


export default class Siemens extends Component {
    render() {
        return (
            <section className='project1'>
                <div className='homeAboutText2'>
                    <h1>SIEMENS</h1>
                    <div className="descriptionlink">
                        <h2>Conceptualization to exicution of the Siemens Microgrid managment solutions infographic Animation</h2>
                        <div className='ProsProdLinks'>
                            <a className="linknexttext" target="_blank" href="https://www.siemens.com/global/en/products/energy/grid-software/operation/grid-control/spectrum-power-mgms.html" rel="noreferrer">OUTCOME</a> <br/>
                            <Link className="linknexttext" to="/Asahi">PROCESS</Link>
                        </div>
                    </div>
                </div>
                <div>
                   <img className='ProjCardImg' src={Sie1} />
                </div>
            </section>
        )
    }
}