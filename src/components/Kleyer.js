import React, { Component } from 'react';
import {CK1} from '../assets/assetsImport';
import { Link } from "react-router-dom";


export default class Kleyer extends Component {
    render() {
        return (
        <section className='project1'>
            <div className='homeAboutText2'>
                <h1>CLOUD KLEYER</h1>
                {/* style={{'font-size': '10em', 'margin-top': '1%'}} */}
                <div className='descriptionlink'>
                    <h2 >UX & UI design for Cloud Kleyer, a cloud data storage product.</h2>
                    <div className='ProsProdLinks'>
                        <a className="linknexttext" target="_blank" href="https://www.cloudkleyer.de/#" rel="noreferrer">OUTCOME</a> <br />
                        <Link className="linknexttext" to="/klyer">PROCESS</Link>
                    </div>
                </div>
            </div>
            <div>
            <img className='ProjCardImg' src={CK1} />
            </div>
        </section>
        )
    }
}
