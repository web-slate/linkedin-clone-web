import React from 'react'
import { FetchView } from 'react-camouflage'
import { useTranslation } from 'react-i18next'

import PostItem from '../PostItem'
import useGetPostList from '@/hooks/useGetPostList'

function PostItemList() {
  const { t } = useTranslation()
  const { isLoading, serverError, postItems } = useGetPostList()
  const postListStatusMapping = {
    success: postItems,
    error: serverError,
    loading: isLoading,
  }

  return (
    <>
      <FetchView statusMapping={postListStatusMapping}>
        <FetchView.Fetching>
          <div>{t('common.loading')}</div>
        </FetchView.Fetching>

        <FetchView.Fetched>
          <span>{JSON.stringify(postItems)}</span>
        </FetchView.Fetched>

        <FetchView.Error>
          <div>{t('post_list.fetch_error')}</div>
        </FetchView.Error>
      </FetchView>


      {/* Can be implemented on map for listing the post items */}
      <PostItem />
    </>
  )
}

export default PostItemList