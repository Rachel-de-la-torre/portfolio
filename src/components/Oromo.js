import React, { Component } from 'react';
import {oro1} from '../assets/assetsImport';
import { Link } from 'react-router-dom';

export default class Oromo extends Component {
    render() {
        return (
            <section className='project1'>
                <div className='homeAboutText2'>
                    <h1>OROMO</h1>
                    <div className="descriptionlink">
                        <h2>UX & UI design for Oromo, a subscription based coffee service.</h2>
                        <div className='ProsProdLinks'>
                            {/* <a className="linknexttext" target="_blank" href="https://oromo.coffee/" rel="noreferrer">OUTCOME</a> <br/> */}
                            <Link className="linknexttext" to="/Oromo">PROCESS</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='ProjCardImg' src={oro1} />
                </div>
            </section>
        )
    }
}
