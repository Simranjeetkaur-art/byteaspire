import React from 'react'
import './Main.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Main = () => {
  return (
    <div className='main container'>
        <div className='main-text'>
            <h1 className='main-title'>Welcome to the ByteAspire Tech Blog!</h1>
            <p>
                This is a blog about tech and programming.
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
        
    </div>
  )
}

export default Main