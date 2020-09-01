import React, { Component } from 'react'
import logo from '../logo.svg';

export default class Navbar extends Component {
    render() {
        return (
            <div class="nav">
                {/* <p>this will be the nav bar</p> */}
                <div class='navlinks'>
                    <p>about&CV</p>
                    <p>work</p>
                </div>
            </div>
        )
    }
}