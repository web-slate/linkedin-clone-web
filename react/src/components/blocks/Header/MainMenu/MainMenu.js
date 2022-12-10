import React from 'react'
import { useNavigate } from 'react-router-dom'
import imageSrc from '../../../../static/images/v.jpeg'
import { useTranslation } from 'react-i18next'
import './MainMenu.css'
import RoutePaths from '@/utils/route-paths'

function MainMenu() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <>
      <nav>
        <ul>
          <li>
            <div id="home" className="selected" onClick={() => navigate(RoutePaths.Home)}>
              <span className="fas fa-home"></span>
              <span className="nav-item-text">{t('home')}</span>
            </div>
          </li>
          <li>
            <div>
              <span className="fas fa-user-friends"></span>
              <span className="nav-item-text">{t('network')}</span>
            </div>
          </li>
          <li>
            <div>
              <span className="fas fa-suitcase"></span>
              <span className="nav-item-text">{t('jobs')}</span>
            </div>
          </li>
          <li>
            <div>
              <span className="fas fa-envelope"></span>
              <span className="nav-item-text">{t('messaging')}</span>
            </div>
          </li>
          <li>
            <div>
              <span className="fas fa-bell"></span>
              <span className="nav-item-text">{t('notifications')}</span>
            </div>
          </li>
          <li>
            <div id="right-border" onClick={() => navigate(RoutePaths.Profile)}>
              <img src={imageSrc} alt="Profile picture" />

              <span className="nav-item-text">
                Me<span className="fas fa-caret-down"> </span>
              </span>
            </div>
          </li>
          <li>
            <div>
              <span className="fas fa-th"></span>

              <span className="nav-item-text">
                Work<span className="fas fa-caret-down"> </span>
              </span>
            </div>
          </li>
          <li id="premium">
            <div>
              <a href="#">Try Premium Free for 1 Month</a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MainMenu
