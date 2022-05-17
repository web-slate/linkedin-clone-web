
import React from 'react'
import imageSrc from '../../../../static/images/link-logo.png';
import profileImg from '../../../../static/images/v.jpeg';
import './Logo.css'; 

function Logo() {
  return <>
    <>
      <img
        id="header-logo"
        src={imageSrc}
        alt="LinkedIn"
      />
      <img
        id="header-picture-menu"
        src={profileImg}
        alt="Profile picture"
      />
      <span id="header-picture-menu-bars">
        <span className="fas fa-bars"></span>
      </span>
    </>
  </>
}

export default Logo
