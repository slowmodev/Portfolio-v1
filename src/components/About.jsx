import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import {VscBracketDot} from 'react-icons/vsc'

export default function About(){
    return(
        <section className='about-container'>
            <h3 className='about-heading'><span>Abo</span>ut Me</h3>
            <div className='grid'>
                <div className='about'>
                    <VscBracketDot className='about-icons' />
                    <p className='about-paragraph'>I'm a computer science graduate. I studied computer science because I've always been curious about computers</p>
                </div>
                <div className='about'>
                    <VscBracketDot className='about-icons' />
                    <p className='about-paragraph'>I'm a frontend developer based in Nigeria. I love the creative process of turning beautiful designs into functional web pages</p>
                </div>
                <div className='about'>
                    <VscBracketDot className='about-icons' />
                    <p className='about-paragraph'>I'm currently working on several projects and having a blast doing it. Sure, debugging CSS can be a bit frustrating at times, but I'm grateful for "border: 1px solid red" lol.</p>
                </div>
                <div className='about'>
                    <AiOutlineStar className='about-icons' />
                    <p className='about-paragraph'>When I'm not working on projects, i also record music, do a bit of mixing and mastering, play basketball and recently developed an interest in reading novels.</p>
                </div>
            </div>
        </section>
    )
}