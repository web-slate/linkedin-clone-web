import React from 'react'

import PostAuthourInfo from './Header/PostAuthorInfo'
import PostContent from './Content/PostContent'
import PostInteractions from './Footer/PostInteractions'

function PostItem() {
  return (
    <article>
      <PostAuthourInfo />
      <PostContent />
      <PostInteractions />
    </article>
  )
}

export default PostItem
