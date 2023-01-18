import React from 'react'
import { FaReact, FaGitAlt } from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiNextdotjs} from 'react-icons/si'

export default function Technologies(){
    return (
        <section className='technologies'>
            <h3 className='tech-heading'><span>Tech</span>nologies</h3>
            {/* <p className='tech-paragraph'>I've built projects with some popular technologies</p> */}
            <div className='grid'>
                <div className='grid-item'>
                    <IoLogoJavascript className='icons'/>
                    <h4 className='tech-title'>Javascript</h4>
                    <p className='tech-desc'>Built some projects with vanilla javascript</p>
                </div>
                <div className='grid-item'>
                    <FaReact className='icons'/>
                    <h4 className='tech-title'>React</h4>
                    <p className='tech-desc'>Building projects with React Building projects with NextJS</p>
                </div>
                <div className='grid-item'>
                    <FaGitAlt className='icons'/>
                    <h4 className='tech-title'>Git(Version Control)</h4>
                    <p className='tech-desc'>Eperience using git, Github precisely</p>
                </div>
                <div className='grid-item'>
                    <SiNextdotjs className='icons'/>
                    <h4 className='tech-title'>NextJS</h4>
                    <p className='tech-desc'>Building projects with NextJS Building projects with NextJS</p>
                </div>
            </div>
        </section>
    )
}