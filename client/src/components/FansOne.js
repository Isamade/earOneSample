import React from 'react';

const FansOne = () => {

    const fansOneAnimationUp = () => {
        console.log('fansOne');
        document.querySelector('.rotate-image-1').classList.add('layer1-translate');
        document.querySelector('.rotate-image-2').classList.add('layer2-rotate');
        document.querySelector('.rectangle-1').classList.add('layer3-rotate');
        document.querySelector('.rectangle-2').classList.add('layer4-rotate');
    }
    
      const FansOneAnimationDown = () => {
        document.querySelector('.rotate-image-1').classList.remove('layer1-translate');
        document.querySelector('.rotate-image-2').classList.remove('layer2-rotate');
        document.querySelector('.rectangle-1').classList.remove('layer3-rotate');
        document.querySelector('.rectangle-2').classList.remove('layer4-rotate');
    }

    return (
        <section className="fans-1" onMouseOver={fansOneAnimationUp} onMouseOut={FansOneAnimationDown}>
        <div>
          <button className="fbutton">Fans</button>
          <h2>Connect with top influencers in your field</h2>
          <p>From Tech to music to business, Ear1 has a wide range of industry experts in diverse fields you have always wanted to connect with. Now is your best chance.</p>
        </div>
        <div className="image-rotation">
          <div className="rectangle-1 layer3-rotate"></div>
          <div className="rectangle-2 layer4-rotate"></div>
          <div className="rotate-image-1 layer1-translate">
            <img srcSet="Rectangle 1 Mobile.png 219w, Rectangle 1.png 375w"
                 sizes="(max-width: 62.5em) 219px, 375px"
                 src="Rectangle 1.png" 
                 alt="earonepic"/>
          </div>
          <div className="rotate-image-2 layer2-rotate"><img src="Rectangle 3.png" alt="earonepic"/></div>
        </div>
      </section>
    )
}

export default FansOne;