import React from 'react';
import './Intro.css';
import myGif from './introImage.gif';
import github from './logo.png';
import gmail from './email.png';
import linkdin from './linkedin.png'


function Intro(){
    return (
        <section className="intro">
          <div className="intro_container">
          <h1>Hello all, I am Dipti Hatwar <span class="wave">👋</span></h1>
        <h3> A passionate Developer having an experience in Data Analytics, Machine Learning and Web Development and want to develop sustainable and scalable social and technical systems to create impact</h3>
        <div class="social-container">     
            <a href = "#a"><img style={{ width: 50, height: 50 }} src={github} alt="github" className='images' /></a>
            <a href="#b"><img  style={{ width: 50, height: 50 }}src = {gmail} alt="gmail" className='images'/></a>
            <a href ="#c"><img style={{ width: 50, height: 50 }} src ={linkdin} alt="linkdin" className='images'/></a>
        </div>

          </div>
          <div>
          <img src={myGif} alt="Intro Image" className='IntroImage' />        
          </div>
          
        
      </section>
    );
    

    

}
export default Intro; 