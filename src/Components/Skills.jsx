import React from 'react';
import "./Skills.css"

const Skills = () => {
  return (
    <div className='skills'>
      <h2 className="title">skills</h2>
      <div className="skill">
        <span className='name'>html</span>
        <span className='progress'> <span className='the-h'></span> </span>
      </div>
      <div className="skill">
        <span className='name'>css</span>
        <span className='progress'> <span className='the-c'></span> </span>
      </div>
      <div className="skill">
        <span className='name'>javascript</span>
        <span className='progress'> <span className='the-j'></span> </span>
      </div>
      <div className="skill">
        <span className='name'>react</span>
        <span className='progress'> <span className='the-r'></span> </span>
      </div>
      <div className="skill">
        <span className='name'>git&github</span>
        <span className='progress'> <span className='the-g'></span> </span>
      </div>
    </div>
  )
}

export default Skills
