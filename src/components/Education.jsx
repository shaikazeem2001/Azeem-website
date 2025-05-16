import React from 'react'
import './Education.css'
const Education = () => {
  return (
    <div>
      <div className="edu-ava">
        <div className='edu-text'>
        <img src="../../public/education.png" className='edu-img' alt="" />
        <h3>Qualifications</h3>
        </div>
        <div className="work">
          <div className="work-card">
            <h1>University of Alabama at Birmingaham</h1>
            <h3>Masters in Computer Science</h3>
            <h4>2024-2026</h4>
          </div>
          <div className="work-card">
            <h1>Annamacharya Institute of Technology And Sciences</h1>
            <h3>Bachelors of Technology in Computer Science</h3>
            <h4>2019-2023</h4>
          </div>
          <div className="work-card">
            <h1>Sri Chaitanya Engineering College</h1>
            <h3>Maths-Physics-Chemistry</h3>
            <h4>2017-2019</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
