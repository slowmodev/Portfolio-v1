import React from 'react';
import ai from '../assets/ai.png'
import portfolio from '../assets/portfolio.png'
import rating from '../assets/desktop-design.jpg'

export default function Projects(){
    return(
        <section className='projects'>
            <h3 className='project-heading'><span>Pro</span>jects</h3>
            <div className='projects-container'>
                <div className='project-row'>
                    <div className='project one'>
                        <div className='project-image'>
                            <img src={ai} alt='ai'/>
                            <div className='view-site'>
                                <h1 className='projects-title'>AI landing Page</h1>
                                <p className='project-desc'>This is a landing page that is fully responsive for all screen sizes</p>
                                <div className='flex'>
                                    <a href='https://github.com/slowmodev/gpt3' target="blank"><h3>View code</h3></a>
                                    <a href='https://openailandingpage.netlify.app/' target="blank"><h3>Visit</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='project two'>
                        <div className='project-image'>
                            <img src={portfolio} alt='3d illustration of young black male' />
                            <div className='view-site'>
                                <h1 className='projects-title'>Portfolio</h1>
                                <p className='project-desc'>Personal portfolio site built with react</p>
                                <div className='flex'>
                                    <a href='https://github.com/slowmodev/Portfolio-v1' target='blank'><h3>View code</h3></a>
                                    <a href='#'><h3>Visit</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='project-row'>
                    <div className='project two'>
                        <div className='project-image'>
                            <img src="https://img.freepik.com/free-photo/beautiful-sky-with-mountains-distance_1232-718.jpg?w=826&t=st=1676821523~exp=1676822123~hmac=42cbd660b1cd9deebef1f2c95d53b1f10adebd7cb9ab5be322e1cd0514864391" alt='clouds' />
                            <div className='view-site'>
                                <h1 className='projects-title'>Weather App</h1>
                                <p className='project-desc'>A simple weather app that fetches data from openweathermap api</p>
                                <div className='flex'>
                                    <a href='https://github.com/slowmodev/Weather-app' target='blank'><h3>View code</h3></a>
                                    <a href='https://weatherraapp.netlify.app/' target='blank'><h3>Visit</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='project one'>
                        <div className='project-image'>
                            <img src={rating} alt="rating card" />
                            <div className='view-site'>
                                <h1 className='projects-title'>Rating card</h1>
                                <p className='project-desc'>A simple frontend mentor rating card challenge</p>
                                <div className='flex'>
                                    <a href='https://github.com/slowmodev/interactive-rating-component-main' target='blank'><h3>View code</h3></a>
                                    <a href='https://deft-toffee-a1d5fc.netlify.app/' target='blank'><h3>Visit</h3></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
        </section>
    )
}