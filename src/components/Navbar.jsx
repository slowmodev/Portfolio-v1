import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar(props){
    const {dark, darkMode} = props;
    return (
        <header>
            <nav className="container-nav">
                <h1 className={darkMode ? 'dark-logo' :'logo'}><a href="index.html"><span>Murray</span> Williams</a></h1>
                <ul className='nav-list'>
                    <li><BsFillMoonStarsFill className='darkmode' onClick={dark} /></li>
                    <li><a className={darkMode ? 'dark-resume':'resume'} href="#">Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}