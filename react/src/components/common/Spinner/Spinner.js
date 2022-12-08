import React from 'react'

import imageSrc from '../../../static/images/link-logo.png'

const Spinner = () => {
  return (
    <>
      <div id="loading-page">
        <div>
          <img src={imageSrc} alt="" />
          <div id="dot-loader">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Spinner
