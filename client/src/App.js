import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import FansOne from './components/FansOne';
import FansTwo from './components/FansTwo';
import InfluencersOne from './components/InfluencersOne';
import InfluencersTwo from './components/InfluencersTwo';
import Features from './components/Features';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

function App() {

  /*document.addEventListener('click', () => {
    let myNum = Math.floor(window.scrollY);
    console.log('scroll', myNum);
    if(700 < myNum && myNum < 800){
      console.log('1', window.scrollY);
      document.querySelector('.black-matte img:nth-child(1)').classList.add('black-matte1-rotate');
      document.querySelector('.black-matte img:nth-child(3)').classList.add('black-matte3-rotate');
    };
    if(1900 < myNum && myNum < 2000){
      console.log('2', window.scrollY);
      document.querySelector('.rotate-image-1').classList.add('layer1-translate');
      document.querySelector('.rotate-image-2').classList.add('layer2-rotate');
      document.querySelector('.rectangle-1').classList.add('layer3-rotate');
      document.querySelector('.rectangle-2').classList.add('layer4-rotate');
    };
    if(2580 < myNum && myNum < 2680){
      console.log('3', window.scrollY);
      document.querySelector('.message-2').classList.add('enterMessage-1');
      document.querySelector('.message-3').classList.add('enterMessage-2');
      document.querySelector('.message-4').classList.add('enterMessage-3');
      document.querySelector('.gray-obscure').classList.add('typing');
    };
    if(3935 < myNum && myNum < 4035){
      console.log('4', window.scrollY);
      document.querySelector('.influencers-card').classList.add('card-effect');
    };
  })*/

  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <FansOne/>
      <FansTwo/>
      <InfluencersOne/>
      <InfluencersTwo/>
      <Features/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;