import React from 'react';
import './About.css';
import girl from '../../assets/girl.png'; 

const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
                <div className='about-section'>
                    <div className='about-left'>
                        <img src={girl} alt='About me' />
                    </div>
                    <div className='about-right'>
                        <div className='about-para'>
                            <p>As a B.Tech Computer Science and Engineering student, I bring expertise in both web and app development. Proficient in HTML, CSS, JavaScript, and React JS, I craft dynamic web experiences.</p><br/>
                            <p>Additionally, I develop seamless mobile apps using React Native. With a strong foundation in cloud technologies, I possess keen knowledge of Amazon Web Services (AWS). I'm passionate about building innovative solutions that bridge the digital divide.</p>
                        </div>
                        <div className='about-skills'>
                            <div className='about-skill'>
                                <p>HTML & CSS</p>
                                <hr style={{ width: "90%" }} />
                            </div>
                            <div className='about-skill'>
                                <p>JavaScript</p>
                                <hr style={{ width: "60%" }} />
                            </div>
                            <div className='about-skill'>
                                <p>React JS</p>
                                <hr style={{ width: "50%" }} />
                            </div>
                            <div className='about-skill'>
                                <p>AWS</p>
                                <hr style={{ width: "60%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
