import React from 'react';
import './Intro.css';
import myGif from './introImage.gif';
import github from './logo.png';
import gmail from './email.png';
import linkdin from './linkedin.png'
import dataAnalysis from "./Data_Analysis.png";
import numpy from "./numpys.png";
import pandas from "./pandas.png";
import python from "./python.png";



function Intro(){
    return (
        <section className="intro">
          <div className="firstPart">
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
          </div>
          <div className='whatIdo'>
              <p><h2> What I Do?</h2></p>
            </div>
          <div className='one'>
           
           
            <div className='img'>
              <img src={dataAnalysis} alt="img" />
            </div>
            <div className='skill_and_description'>
              <div className='skill'>
                <h1>Data Analytics & ML</h1>
          
              <img src={python} alt='python'></img>
              <img src={numpy} alt='numpys'></img>
              <img src={pandas} alt='pandas'></img>
              


              </div>
              <div className='description'>
                <h3> 💥 Developing Models that clean, tranform and analyse raw data to discover useful information, in order to make conclusions about the data.</h3>

                <p><h3>💥 Experience of working with different python Libraries like Numpy, Pandas, Matplotlib, Seaborn etc. and have knowledge of Data analysis algorithms and techniques.</h3></p>
              </div>
            </div>
            </div>
          

          
        
       
      </section>
     
    
    );
    

    

}
export default Intro; 