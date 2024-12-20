import React, { useState } from 'react'
import './FirstImpression.css'
import downarr from './downarr.png'
import { useNavigate } from 'react-router-dom'

const FirstImpression = () => {
    const [slideUp, setSlideUp] = useState(false)
    const navigate = useNavigate()

    const HandleSwipe = () =>{
        setSlideUp(true)
       setTimeout (() =>  navigate('/home'), 1500)
    }
  return (  
    <div className={`container-first ${slideUp ? `slideUp` : ''}`}>
      <img onClick={HandleSwipe} className='downKey' src={downarr} alt="" />
    </div>
  )
}

export default FirstImpression
