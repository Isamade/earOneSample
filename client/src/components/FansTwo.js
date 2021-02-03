import React from 'react';

const FansTwo = () => {

    const fansTwoAnimationUp = () => {
        document.querySelector('.message-2').classList.add('enterMessage-1');
        document.querySelector('.message-3').classList.add('enterMessage-2');
        document.querySelector('.message-4').classList.add('enterMessage-3');
        document.querySelector('.gray-obscure').classList.add('typing');
    }
    
    const FansTwoAnimationDown = () => {
        document.querySelector('.message-2').classList.remove('enterMessage-1');
        document.querySelector('.message-3').classList.remove('enterMessage-2');
        document.querySelector('.message-4').classList.remove('enterMessage-3');
        document.querySelector('.gray-obscure').classList.remove('typing');
    }

    return (
        <section className="fans-2" onMouseOver={fansTwoAnimationUp} onMouseOut={FansTwoAnimationDown}>
        <div  style={{backgroundImage: "url(/noise.png)"}}>
          <div className="flex-justify flex-align">
            <button className="fbutton">Fans</button>
            <img src="Icon chat.svg" alt="earonepic"/>
          </div>
          <h2>Be assured of replies</h2>
          <p>With ear1, we assure you of getting a response to your messages. Don’t be part of the noise in the dms. Get ahead of the game by paying a small fee. </p>
        </div>
        <div style={{backgroundImage: "url(/noise.png)"}} className="flex-justify">
          <div className="message-1">
            <img src="Vector.svg" alt="earonepic"/>
            <img src="Ellipse 16.png" alt="earonepic"/>
            <span>Chris Ekpenyong</span>
          </div>
          <div className="message-2">Hey Boss, I am Charles an upcoming producer and I make beats which I’d like you to hear <span>9:05pm</span></div>
          <div className="message-3">Hey, Nice to meet you <span>9:06pm</span></div>
          <div className="message-4">I’m not looking to hire a producer now <br/><span>9:07pm</span></div>
          <div className="message-5">
            <div>
              <span>Sorry. Another time</span>
              <span className="gray-obscure">Sorry. Another timee</span>
              <span>
                <img src="attachment 1.svg" alt="earonepic"/>
                <img src="microphone 1.svg" alt="earonepic"/>
              </span>
            </div>
            <img src="send 1.svg" alt="earonepic"/>
          </div>
        </div>
      </section>
    )
}

export default FansTwo;