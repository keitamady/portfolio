import React from 'react'
import "./Contacts.css"
const Contacts = () => {
  return (
    <div className='contacts'>
        <h2 className="title">contacts</h2>
        <div className="contact">
            <div className="email">
                <span>email:</span>
                <a style={{textTransform:"capitalize"}} href="mailto:sereboria100@gmail.com">contact me</a>
            </div>
            <div className="github">
                <span>github:</span>
                <a href="https://github.com/keitamady">visit</a>
            </div>
            <div className="linked">
                <span>linkedIn:</span>
                <a href="https://www.linkedin.com/in/mamady-keita-0a3310422">visit</a>
            </div>
        </div>
    </div>
  )
}

export default Contacts
