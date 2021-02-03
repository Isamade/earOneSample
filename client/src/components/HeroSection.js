import React from 'react';

const HeroSection = () => {

    const heroAnimationUp = () => {
        document.querySelector('.black-matte img:nth-child(1)').classList.add('black-matte1-rotate');
        document.querySelector('.black-matte img:nth-child(3)').classList.add('black-matte3-rotate');
    }
    
      const heroAnimationDown = () => {
        document.querySelector('.black-matte img:nth-child(1)').classList.remove('black-matte1-rotate');
        document.querySelector('.black-matte img:nth-child(3)').classList.remove('black-matte3-rotate');
    }

    return (
        <section className="hero-section" style={{ backgroundImage: "url(/noise.png)" }} onMouseOver={heroAnimationUp} onMouseOut={heroAnimationDown}>
        <header className="flex-justify">
          <div className="logo">
            <img src="logo green + black copy.svg" alt="earonepic"/>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>For Fans</li>
              <li>For Influencers</li>
              <li>Features</li>
              <li>FAQs</li>
            </ul>
            <img src="menu 1.svg" alt="earonepic"/>
          </nav>
        </header>
        <h1>Build direct, meaningful connections.</h1>
        <p>Ear1 helps you connect directly with your favourite influencers for a small fee. What’s more? We assure you of getting a reply.</p>
        <div className="store-badge flex-justify">
          <img src="google-play-badge 1.svg" alt="earonepic"/>
          <img src="app-store-badge 1.svg" alt="earonepic"/>
        </div>
        <div className="black-matte">
          <img src="Black Matte 1.png" alt="earonepic"/>
          <img srcSet="Black Matte 2 Mobile.png 322w, Black Matte 2.png 737w"
               sizes="(max-width: 56.25em) 322px, 737px"
               src="Black Matte 2.png" 
               alt="earonepic"/>
          <img src="Black Matte 3.png" alt="earonepic"/>
        </div>
      </section>
    )
}

export default HeroSection;