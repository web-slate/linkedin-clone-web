import React from 'react'

function PostForm() {
  return (
    <>
      <div id="share-box">
        <div id="button-box">
          <button id="btn-post">
            <span className="fas fa-edit"></span>
            <span id="btn-text">Start a post</span>
          </button>
          <button id="btn-picture">
            <span className="fas fa-camera"></span>
          </button>
          <button id="btn-video">
            <span className="fas fa-video"></span>
          </button>
          <button id="btn-document">
            <span className="fas fa-file"></span>
          </button>
        </div>
        <div id="link-box">
          <a href="#">Write an article</a>
          <span>on LinkedIn</span>
        </div>
      </div>
    </>
  )
}

export default PostForm
