
import React from 'react'


function FooterLinks() {
  return <>
    <footer>
      <ul>
        <li>About</li>
        <li>Help Center</li>
        <li>
          Privacy & Terms<span
            className="fas fa-angle-down"
          ></span>
        </li>
        <li>Advertising</li>
        <li>
          Business Services
          <span className="fas fa-angle-down"></span>
        </li>
        <li>Get the LinkedIn app</li>
        <li>More</li>
      </ul>
      <div>
        <strong>Linked<span>in</span></strong>
        <span>LinkedIn Corporation © 2019</span>
      </div>
    </footer>
  </>
}

export default FooterLinks
