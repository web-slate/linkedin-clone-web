import React from 'react'

function PostAuthourInfo({
  authorImageUrl,
  name,
  connection,
  designation,
  companyName,
  postedSince
}) {
  return (
    <>
      <div id="post-author">
        <a href="#">
          <div>
            <img src={authorImageUrl} alt="Author Photograph" />
            <div>
              <div>
                <strong id="post-author-name">{name}</strong>
                <span>
                  <span>&nbsp;·&nbsp;</span>{connection}
                </span>
              </div>
              <span>{designation} at {companyName}</span>
              <span>{postedSince}</span>
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
