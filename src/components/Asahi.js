import React, { Component } from 'react'
import { SAsahi } from '../assets/assetsImport';
import { Link } from 'react-router-dom';
import {Ticker} from 'react-ticker-tape'


export default class Asahii extends Component {
    render() {
        return (
            <section className='project1'>
                <div className='homeAboutText2'>
                    <h1>ASAHI</h1>
                    <div className="descriptionlink">
                        <h2>Front end development for the Discover Tokyo Virtual Experience. Brought to you by Asahi Super
                            Dry and Resident Advisor, powered by Club Qu.</h2>
                        <div className='ProsProdLinks'>
                            <a className="linknexttext" target="_blank" href="https://www.youtube.com/watch?v=rxy8xVKQ6D0&t=1s&ab_channel=ClubQu" rel="noreferrer">OUTCOME</a> <br />
                            {/* <Link className="linknexttext" to="/asahi">PROCESS</Link> */}
                            <Link className="linknexttext" to="/asahi">PROCESS</Link>
                        </div>
                    </div>
                </div>
                <div>
                   <img className='ProjCardImg' src={SAsahi} />
                </div>
            </section>
        )
    }
}
