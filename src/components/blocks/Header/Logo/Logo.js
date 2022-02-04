
import React from 'react'
import imageSrc from '../../../../static/images/link-logo.png';



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
        src="https://raw.githubusercontent.com/mrmauricio/linkedin-layout-clone/master/images/picture.jpeg"
        alt="Profile picture"
      />
      <span id="header-picture-menu-bars">
        <span className="fas fa-bars"></span>
      </span>
    </>
  </>
}

export default Logo
