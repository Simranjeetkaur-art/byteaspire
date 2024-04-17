import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main  from './components/Main/Main'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {
  const [playState, setPlayState] = useState(false);

 
 
  return (
    <div>
      <Navbar />   
      <Main />  
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
        </div> 
      <VideoPlayer playState={playState} setPlayState ={setPlayState} />
      
    </div>
  )
}

export default App