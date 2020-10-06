import React from 'react';
import '../App.scss';
// import Projects from './Projects';
import { Link } from "react-router-dom";
import Loading from './Loading';
import $ from "jquery";
import { Component } from "react";
import { render } from "react-dom";




export default class HomeNav extends React.Component {
        componentDidMount () {
        $(window).scroll(function(event) {

            if ($(window).scrollTop() > 100) {
                $('.main_h').addClass('sticky');
            } else {
                $('.main_h').removeClass('sticky');
            }
        });
        }
    render() {
        return (
            <div class='homeAll'>
                <section class='homeLoad'>
                    <Loading />
                </section>
                <section class='homeAbout'>
                    <h1>Hi i'm Rachel de la Torre</h1>
                    <h2>I'm a UX UI designer coming from a media design background!</h2>
                    <h3>I am a hybrid designer with a passion for learning, crafting outcomes using every tool in my belt</h3>
                    <Link to="/about">More about me</Link>
                </section>
                {/* <section className="homeProjects">
                <Projects/>
                </section> */}
            </div>
        )
    }
}

