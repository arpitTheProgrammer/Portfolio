import React from 'react'
import './About.css'
import bg from './bg.jpg'
import Navbar from './Navbar'
import coding from './coding.jpg'
import game from './game.jpg'
import song from './song.jpg'

const About = () => {
  return (
    <div>
        {/* <img className='background' src={bg} alt="" /> */}
        <Navbar/>
          {/* <div className="title-section">SKILLS</div> */}
          <h1 className='about-head'>Hobbies</h1>
          <p className='about-p'>An 18-year-old, Who like build stuffs with a passion for technology and a love for coding. Currently pursuing my B.Tech in Computer Science at Bansal Institute Of Engineering And Technology, I find joy in exploring the vast world of programming.</p>
        <div className="about">
            <div className="blocks block1">
              <img src={song} alt="" />
            </div>
            <div className="blocks block3">
              <img src={game} alt="" />
            </div>
            <div className="blocks block2">
              <img src={coding} alt="" />
            </div>

        </div>
    </div>
  )
}

export default About
