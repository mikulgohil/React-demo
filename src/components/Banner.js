import React from 'react'
import '../assets/scss/components/_nav.scss'
import '../assets/scss/components/_banner.scss'

import logo from '../assets/images/logo-white.png'

const Banner = (props) => (
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container"> 
                <a class="navbar-brand navbar-logo" href="/"> <img src={logo} alt="logo" class="logo-1" /> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"> <a class="nav-link" href="" data-scroll-nav="0">Home</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="1">About</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="2">Services</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="3">Own Work</a> </li>
                    <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="4">Contact</a> </li>
                </ul>
                </div>
            </div>
        </nav>


        <div class="banner text-center" data-scroll-index='0'>
            <div class="banner-overlay">
                <div class="container">
                <h1 class="text-capitalize">Best Template for Creative Business</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec justo rhoncus, pharetra dui ut, cursus turpis. Aenean tincidunt vitae ligula eget congue.</p>
                <a href="#" class="banner-btn">Get Started</a> </div>
            </div>
        </div>
    </div>
    
)

export default Banner
