import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CK } from '../assets/assetsImport';

export default class Kleyer extends Component {
    render() {
        return (
            <div class='projectCard'>
                <h1>CLOUD KLEYER</h1>
                <h4>UX&UI<br />Cloud Kleyer is a cloud data storage product.</h4>
                <a href="https://www.linkedin.com/in/rachel-de-la-torre-90383573/">https://www.cloudkleyer.de/de/</a>
                <img src={ CK } alt='Cloud Kleyer' />
            </div>
        )
    }
}
