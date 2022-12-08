import React from 'react'

function PostAuthourInfo() {

  return (
    <>
      <div id="post-author">
        <a href="#">
          <div>
            <img src="https://avatars.githubusercontent.com/u/16048888?s=96&v=4" alt="" />
            <div>
              <div>
                <strong id="post-author-name">Govindaraj K</strong>
                <span>
                  <span>&nbsp;·&nbsp;</span>1st
                </span>
              </div>
              <span>Web Developer at Jp Morgan</span>
              <span>12h</span>
            </div>
          </div>
        </a>
        <div>
          <span className="fas fa-circle"></span>
          <span className="fas fa-circle"></span>
          <span className="fas fa-circle"></span>
        </div>
      </div>
    </>
  )

}

export default PostAuthourInfo
