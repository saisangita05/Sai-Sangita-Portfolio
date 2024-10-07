import React from 'react'
import './Home.css'
import profile_img from '../../assets/profile_img.jpg';
const Home = () => {
  return (
    <div className='home'>
        <img src={profile_img} alt=''/>
        <h1><span>Hello,I am Sai...</span><br/> Welcome to my Portfolio</h1>
        <p>I seamlessly blend web development, App development, and coding expertise to create captivating digital experiences. .</p>
        <div className='home-action'>
            
            <div className='home-resume'>My Resume</div>
        </div>
    </div>
  )
}

export default Home