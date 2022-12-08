import React from 'react'
import { useTranslation } from 'react-i18next'

function PostForm() {
  const { t } = useTranslation()

  return (
    <>
      <div id="share-box">
        <div id="button-box">
          <button id="btn-post">
            <span className="fas fa-edit"></span>
            <span id="btn-text">{t('post_form.post_link')}</span>
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
          <a href="#">{t('post_form.write_article')}</a>
          <span>{t('post_form.on_linkedIn')}</span>
        </div>
      </div>
    </>
  )
}

export default PostForm
