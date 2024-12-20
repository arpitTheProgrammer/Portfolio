import React from 'react'
import './Home.css'
import bg from './bg.jpg'
import Navbar from './Navbar'
import code from './code.jpg'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import SocialMedia from './socialMedia.jpg'
import insta from './ig.jpg'
import git from './git.png'
import lkdin from './lkdin.png'

function Home() {
  const [text] = useTypewriter({
    words: ['Eat </>', 'Sleep </>', 'Code </>', 'Repeat </>'],
    loop:{}
  })

  const HandleInsta = () => {
    window.open('https://www.instagram.com/its.arpit.sri16/')
  }
  const HandleGit = () =>{
    window.open('https://github.com/arpitbanarasi')
  }
  const HandleLinkdin = () => {
    window.open('https://linkedin.com/in/arpit-srivastava-7a8401308')
  }
  return (
    <>
    <div className="container">
    <div>
        {/* <img className='background' src={bg} alt="" /> */}
        <Navbar/>
      <div className="center-font">
        <h3>Hay This is Arpit
          <span style={{color: 'red'}}>{text}</span>
        </h3>
          <img src={code} alt="" />
      </div>
    </div>
    <div>
    <div className="about" style={{alignItems:'center',top:'0px', height:'868px'}}>
        <img src={SocialMedia} className='social-handle' alt="" />
          <img className='handles insta' onClick={HandleInsta} src={insta} alt="" />
          <img className='handles git' onClick={HandleGit} src={git} alt="" />
          <img className='handles lkdin' onClick={HandleLinkdin} src={lkdin} alt="" />
        </div>
    </div>
    </div>
    </>
  )
}

export default Home
