import React from 'react'
import './Skill.css'
import html from '../../assets/images (7).png'; 
import css from '../../assets/images (8).png';
import js from '../../assets/images (9).png';
import react from '../../assets/images (10).png';
import aws from '../../assets/images (11).png';
import figma from '../../assets/unnamed.jpg';

const Skill = () => {
  return (
    <div className='skills'>
        <div className='skill-title'>
            <h1>My Skills</h1>
        </div>
        <div className='container'>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={html} alt=''/>
                    </div>
                    <h3>HTML 5</h3>
                </div>
                <p>HTML5 introduces a range of new features that enhance web development. Semantic elements like header,
                     footer, article, and section 
                        improve the structure and readability of web pages. HTML5 includes APIs for offline storage, drag-and-drop, and canvas for drawing graphics, making it a
                         powerful tool for creating modern, interactive web applications. </p>
            </div><div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={css} alt=''/>
                    </div>
                    <h3>CSS</h3>
                </div>
                <p>CSS (Cascading Style Sheets) is essential for styling web
                     pages, offering powerful capabilities for design and layout. Selectors such as classes, IDs, and pseudo-classes enable precise targeting of HTML elements for styling. CSS3, the latest version,
                     introduces advanced features like gradients, shadows, and animations.</p>
            </div><div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={js} alt=''/>
                    </div>
                    <h3>JavaScript</h3>
                </div>
                <p>JavaScript is a versatile programming language primarily used for 
                    adding interactivity to web pages. It enables dynamic behavior, allowing developers to manipulate the content and structure of web pages in real-time. JavaScript supports event handling, enabling actions like form validation, animations, 
                    and responding to user interactions such as clicks and scrolls.</p>
            </div><div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={react} alt=''/>
                    </div>
                    <h3>ReactJS</h3>
                </div>
                <p>React.js is a powerful JavaScript library for building user interfaces,
                     particularly single-page applications where data changes over time.React enables
                      developers to create reusable UI components, making code more modular.The virtual DOM
                       feature allows React to efficiently
                       update and render only the components 
                      that change,improving performance. 
                    </p>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={aws} alt=''/>
                    </div>
                    <h3>AWS</h3>
                </div>
                <p>Amazon Web Services (AWS) is a comprehensive cloud computing 
                    platform offering a wide range of services for computing, storage, 
                    databases, machine learning, and more. It enables businesses to scale and 
                    innovate quickly by providing on-demand resources with flexible pricing models.!</p>
            </div>
            <div className='skill-box'>
                <div className='skill-title'>
                    <div className='img'>
                        <img src={figma} alt=''/>
                    </div>
                    <h3>Figma</h3>
                </div>
                <p>Figma is a collaborative design tool widely used for creating user
                     interfaces and user experiences. It allows multiple designers to work on the 
                     same project in real-time, enhancing team collaboration and productivity. 
                     Figma's vector graphics editor supports scalable designs, while its robust 
                     prototyping capabilities enable interactive and clickable prototypes for 
                     testing and feedback. </p>
            </div>
        </div>
        
    </div>
  )
}

export default Skill