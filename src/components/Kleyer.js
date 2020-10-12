import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { CK } from '../assets/assetsImport';

export default class Kleyer extends Component {
    render() {
        return (
            <div class='projectCard'>
                <div class='CardCloudK'>
                    <h1>CLOUD KLEYER</h1>
                    <h2>UX & UI Design for a cloud-based data storage product.</h2>
                    <a href="https://www.cloudkleyer.de/de/">SEE PROJECT</a>
                </div>
                {/* <img class='bannerImg' src={ CK } alt='Cloud Kleyer' /> */}
            </div>
        )
    }
}

