import React from 'react';

const InfluencersOne = () => {
    return (
        <section className="influencers-1">
        <div>
          <img srcSet="Black Matte 4 Mobile.png 214w, Black Matte 4.png 581w"
               sizes="(max-width: 75em) 214px, 581px"
               src="Black Matte 4.png"
               alt="earonepic"/>
        </div>
        <div>
            <button className="ibutton">Influencer</button>
            <h2>Earn money while you chat</h2>
            <p>As an influencer, you get paid by your audience to connect with them. That way to maximize time while earning.</p>
        </div>
      </section>
    )
}

export default InfluencersOne;