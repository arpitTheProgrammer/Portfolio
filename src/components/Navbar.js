import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();

  const HandleAbout =() => {
    navigate('/about')
  }

  const HandleHome = ()=> {
    navigate('/home')
  }
  const HandleProject = () =>{
    navigate('/project')
  }
  return (
    <div className='container-nav'>
      <div className="item-list">
        <ul className="item" onClick={HandleHome}>Home</ul>
        <ul className="item" onClick={HandleAbout}>About</ul>
        <ul className="item" onClick={HandleProject}>Project</ul>
      </div>
    </div>
  )
}

export default Navbar
