import React from 'react'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation()

  return (
    <div id="feed-sort">
      <hr />
      <button>
        <span>{t('common.sort_by')}:</span>
        <strong>{t('common.top')}</strong>
        <span className="fas fa-sort-down"></span>
      </button>
    </div>
  )
}

export default Header