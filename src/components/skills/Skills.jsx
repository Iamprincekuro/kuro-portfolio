import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <h5>What I do</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="left__skill">
          <h3 className="skill__ed">Frontend dev</h3>
          <div className="skill__box ">
            <span className="skill__title">HTML</span>
            <div className="skill__bar">
              <span className="skill__pct html">
                <span className="tooltip">95%</span>
              </span>
            </div>

            <span className="skill__title">CSS</span>
            <div className="skill__bar">
              <span className="skill__pct css">
                <span className="tooltip">80%</span>
              </span>
            </div>

            <span className="skill__title">JavaScript</span>
            <div className="skill__bar">
              <span className="skill__pct javascript">
                <span className="tooltip">75%</span>
              </span>
            </div>

            <span className="skill__title">React JS</span>
            <div className="skill__bar">
              <span className="skill__pct react">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="middle__skill">
          <h3 className="skill__ed">Backend dev</h3>
          <div className="skill__box">
            <span className="skill__title">NodeJS</span>
            <div className="skill__bar">
              <span className="skill__pct html">
                <span className="tooltip">in view</span>
              </span>
            </div>

            <span className="skill__title">PHP</span>
            <div className="skill__bar">
              <span className="skill__pct css">
                <span className="tooltip">N/A</span>
              </span>
            </div>

            <span className="skill__title">MySQL</span>
            <div className="skill__bar">
              <span className="skill__pct javascript">
                <span className="tooltip">in view</span>
              </span>
            </div>
            <span className="skill__title">MongoDB</span>
            <div className="skill__bar">
              <span className="skill__pct react">
                <span className="tooltip">N/A</span>
              </span>
            </div>
          </div>
        </div>
        <div className="right__skill">
          <h3 className="skill__ed">Other skills</h3>
          <div className="skill__box">
            <span className="skill__title">Content creation</span>
            <div className="skill__bar">
              <span className="skill__pct html">
                <span className="tooltip">90%</span>
              </span>
            </div>
            <span className="skill__title">Communication</span>
            <div className="skill__bar">
              <span className="skill__pct css">
                <span className="tooltip">85%</span>
              </span>
            </div>
            <span className="skill__title">Problem solving</span>
            <div className="skill__bar">
              <span className="skill__pct javascript">
                <span className="tooltip">75%</span>
              </span>
            </div>
            <span className="skill__title">Project MGT</span>
            <div className="skill__bar">
              <span className="skill__pct react">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
