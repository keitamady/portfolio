import React from 'react';
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className='about'>
      <div className="images">
          <img src="imgs/Photo.jpg" alt="" />
            <div className="titles">
            <h1>mamady keita </h1>
            <span>Front-End Developer|React Developer</span>
        </div>
      </div>
  
        <div className="about-me">
            <h2 className='title'>about me</h2>
            <span>hello, i am a front-End Developer learning to build moder 
            web applications using React and Javascript. I 
            am looking for my first remote job opportunity
            </span>
        </div>
      </div>
  
  )
}

export default AboutMe
