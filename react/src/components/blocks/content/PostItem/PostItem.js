import React from 'react'
import { FetchView } from 'react-camouflage'

import PostForm from '../PostForm'
import PostAuthourInfo from './PostAuthorInfo'
import PostContent from './PostContent'
import PostInteractions from './PostInteractions'
import useGetPostList from '../../../services/hooks/useGetPostList'

function PostItem() {
  const { isLoading, serverError, postItems } = useGetPostList()
  const postListStatusMapping = {
    success: postItems,
    error: serverError,
    loading: isLoading,
  }

  return (
    <>
      <div id="main-wrapper">
        <main id="main-section">
          <PostForm />
          <FetchView statusMapping={postListStatusMapping}>
            <FetchView.Fetching>
              <div>Loading...</div>
            </FetchView.Fetching>

            <FetchView.Fetched>
              <span>{JSON.stringify(postItems)}</span>
            </FetchView.Fetched>

            <FetchView.Error>
              <div>sorry error message</div>
            </FetchView.Error>
          </FetchView>

          <div id="feed-sort">
            <hr />
            <button>
              <span>Sort by:</span>
              <strong>Top</strong>
              <span className="fas fa-sort-down"></span>
            </button>
          </div>

          {/* Can be implemented on map for listing the post items */}
          <article>
            <PostAuthourInfo />
            <PostContent />
            <PostInteractions />
          </article>
        </main>
      </div>
    </>
  )
}

export default PostItem
