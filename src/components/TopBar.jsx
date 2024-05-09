import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons';

function TopBar() {
  return (
    <div id='top-bar' className='top-bar'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-8 col-xs-12'>
            <div className='ts-date'>
              <FontAwesomeIcon icon={faCalendarCheck} /> May 9, 2024
            </div>
            <ul className='unstyled top-nav' style={{display: 'none'}}>
              <li>
                <a href='https://bpbd.baliprov.go.id/about-us'>About</a>
              </li>
              <li>
                <a href='https://bpbd.baliprov.go.id/site-map'>Site Map</a>
              </li>
              <li>
                <a href='https://bpbd.baliprov.go.id/privacy'>Privacy</a>
              </li>
              <li>
                <a href='https://bpbd.baliprov.go.id/contact-us'>Contact</a>
              </li>
            </ul>
          </div>

          <div className='col-md-4 col-sm-4 col-xs-12 top-social text-right'>
            <ul className='unstyled'>
              <li>
                <a
                  title='Facebook'
                  href='https://www.facebook.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='social-icon'>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </span>
                </a>
                <a
                  title='Instagram'
                  href='https://www.instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='social-icon'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
                <a
                  title='Twitter'
                  href='https://www.twitter.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='social-icon'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
