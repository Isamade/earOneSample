import React from 'react';

const Features = () => {
    return (
        <section className="features">
        <h2>The ear1 assurance</h2>
        <div className="features-content">
          <div><img src="Features.svg" alt="earonepic"/></div>
          <div><img srcSet="Black Matte 4 Mobile.png 214w, Black Matte 5.png 524w"
                    sizes="(max-width: 43.25em) 214px, 524px"
                    src="Black Matte 5.png"
                    alt="earonepic"/>
          </div>
        </div>
        <div style={{backgroundImage: "url(/noise.png)"}} className="frame-10">
          <div className="frame-10-div">
            <div className="frame-10-hand">
              <img src="Hand Phone.png" alt="earonepic"/>
              <img src="Phone Screen.png" alt="earonepic"/>
            </div>
            <div className="frame-10-content">
              <h3>Get ahead of your game</h3>
              <p>Save time and effort. Ear1 is your best choice.</p>
              <div className="flex-justify">
                <img src="google-play-badge 1.svg" alt="earonepic"/>
                <img src="app-store-badge 1.svg" alt="earonepic"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features;