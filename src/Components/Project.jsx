import React from 'react';
import "./Project.css"

const Project = () => {
  return (
    <div className='project'>
      <h2 className="title">projects</h2>
      <div className="parent">
      <div className="project-items">
        <div className="images">
          <img src="imgs/todo.jpg" alt="images" />
          <div className="names">
            <h3 className='name'>todo list</h3>
            <span className='create-with'>react | css</span>
          </div>
        </div>
        <div className="links">
           <a className='demo' href="">live demo</a>
            <a className='github' href="https://github.com/keitamady/todo">github</a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project
