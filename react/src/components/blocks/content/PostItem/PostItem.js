import React from 'react'

import PostAuthourInfo from './Header/PostAuthorInfo'
import PostContent from './Content/PostContent'
import PostInteractions from './Footer/PostInteractions'

const authourInfoProps = {
  authorImageUrl: 'https://avatars.githubusercontent.com/u/16048888?s=96&v=4',
  name: 'Govind K',
  connection: '1st',
  designation: 'React Developer',
  companyName: 'Jp Morgan',
  postedSince: '12h',
}

function PostItem() {
  return (
    <article>
      <PostAuthourInfo
        {...authourInfoProps}
      />
      <PostContent />
      <PostInteractions />
    </article>
  )
}

export default PostItem
