import React from 'react';

const Footer = () => {
    return (
        <footer>
        <div>
          <p><strong>Be in the know.</strong> Get access to amazing offers and discounts</p>
          <form>
            <input type="text"
                   placeholder="Enter your email address"
                   className="input-text"/>
            <input type="submit"
                   className="input-submit"
                   value="SUBMIT"/>
          </form>
        </div>
        <div className="footer-grid">
          <div className="grid-1">
            <div><img src="Footer Logo Variation.svg" alt="earonepic"/></div>
            <div>
              <img src="Facebook Icon.svg" alt="earonepic"/>
              <img src="Twitter Icon.svg" alt="earonepic"/>
              <img src="Instagram Icon.svg" alt="earonepic"/>
            </div>
          </div>
          <div className="grid-2">
            <ul>
              <li><h5>Links</h5></li>
              <li>Home</li>
              <li>For fans</li>
              <li>For influencers</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="grid-3">
            <ul>
              <li><h5>Get help</h5></li>
              <li>Support</li>
              <li>FAQs</li>
              <li>Partnership</li>
            </ul>
          </div>
          <div className="grid-4">
            <ul>
              <li><h5>Download</h5></li>
              <li>Android</li>
              <li>IOS</li>
            </ul>
          </div>
          <div className="grid-5">
            <ul>
              <li><h5>Resources</h5></li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </footer>
    )
}

export default Footer;