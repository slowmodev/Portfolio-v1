import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub
} from 'react-icons/ai'
import heroImage from '../assets/Hero.jpeg'

export default function Hero(props){
    const { darkMode } = props
    return (
        <section className='hero-container'>
            <div className='hero'>
                <div className='hero-description'>
                    <h2 className='hero-name'>Williams <span>Momohemi.</span></h2>
                    {/* <h3 className='hero-job'>Frontend Developer.</h3> */}
                    <p className={darkMode ? 'dark-hero-paragraph' : 'hero-paragragh'}>Hi, I'm Williams, a frontend developer from Nigeria. I specialize in creating visually appealing and user-friendly websites using some popular technologies. Checkout my projects and do well to drop a message, Cheers.</p>  
                </div>
                <div className={darkMode ? 'dark-socials' :'socials'}>
                    <a href=""><AiFillTwitterCircle /></a>
                    <a href=""><AiFillLinkedin /></a>
                    <a href=""><AiFillGithub /></a>
                </div>
            </div>
            <div className='hero-image-container'>
                <img className='hero-image' src={heroImage} alt="Williams momoh" />
            </div>
        </section>
    )
}