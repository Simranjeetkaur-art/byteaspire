import React from 'react'
import './About.css'
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


const About = ({setPlayState}) => { 
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> 
        </div> 
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>fdjhjhd jjdfgj jkgjfgj hjdfhgk hh huhfug uhgui hgiu ufufdhu  uuhudghu  fhughd  uhf  uhhfd h ufh g d  uh u hffdhg  fduhu h hd h fdh  ifdhhihf h odfgh h ufdhg  hhfghd  ofdh</p>
            <p>fdjhjhd jjdfgj jkgjfgj hjdfhgk hh huhfug uhgui hgiu ufufdhu  uuhudghu  fhughd  uhf  uhhfd h ufh g d  uh u hffdhg  fduhu h hd h fdh  ifdhhihf h odfgh h ufdhg  hhfghd  ofdh</p>
            <p>fdjhjhd jjdfgj jkgjfgj hjdfhgk hh huhfug uhgui hgiu ufufdhu  uuhudghu  fhughd  uhf  uhhfd h ufh g d  uh u hffdhg  fduhu h hd h fdh  ifdhhihf h odfgh h ufdhg  hhfghd  ofdh</p>
        </div>
    </div>
  )
}

export default About