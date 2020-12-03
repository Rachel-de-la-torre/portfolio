import '../App.scss';
import React, { Component } from 'react'

export default class ProtectedContent extends Component {
    render() {
        return (
            <div>
                <div class='homeAboutText2'>
                    <h1 class='nameWeight'>Password Protected</h1>
                    <h2>The information you are trying to access is password protected please contact for more information</h2>
                    <a>Contact</a>
                </div>
            </div>
        )
    }
}

