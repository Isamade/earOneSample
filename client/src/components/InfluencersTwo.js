import React from 'react';

const InfluencersTwo = () => {

    const influencersAnimationUp = () => {
        document.querySelector('.influencers-card').classList.add('card-effect');
    }
    
    const influencersAnimationDown = () => {
        document.querySelector('.influencers-card').classList.remove('card-effect');
    }

    return (
        <section className="influencers-2" onMouseOver={influencersAnimationUp} onMouseOut={influencersAnimationDown}>
        <div style={{backgroundImage: "url(/noise.png)"}}>
          <div className="card-border">
            <div className="influencers-card">
              <div className="card-top flex-justify flex-align">
                <img src="Ellipse 12.png" alt="earonepic"/>
                <p>Femi Adekunle <span>has paid and requested to you</span></p>
              </div>
              <div className="card-buttons flex-justify">
                <button>Decline</button>
                <button>Accept</button>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: "url(/noise.png)"}}>
          <div className="flex-justify flex-align">
            <button className="ibutton">Influencer</button>
            <img src="Icon filter.svg" alt="earonepic"/>
          </div>
          <h2>Filter the noise in the dm’s</h2>
          <p>Ear1 helps you get rid of all the noise in your dm’s across other social media apps. This way, you are sure to connect with serious people and make genuine business and personal connections.</p>
        </div>
      </section>
    )
}

export default InfluencersTwo;