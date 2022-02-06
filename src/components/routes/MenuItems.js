import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import imageSrc from '../../static/images/v.jpeg'
import { useTranslation } from 'react-i18next';
import App from '../../App';
import MyNetwork from '../blocks/Pages/MyNetwork';
import Jobs from '../blocks/Pages/Jobs';
import Messaging from '../blocks/Pages/Messaging';
import Notifications from '../blocks/Pages/Notifications';

const MenuItems = () => {
  const { t } = useTranslation();
  return <>
    <Router>
        <div>
          <nav>
                <ul>
                    <li>
                        <div id="home" className="selected">
                            <span className="fas fa-home"></span>
                            <Link to={'/'} className="nav-item-text">{t('Home')}</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="fas fa-user-friends"></span>
                            <Link to={'/mynetwork'} className="nav-item-text">{t('My Network')}</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="fas fa-suitcase"></span>
                            <Link to={'/jobs'} className="nav-item-text">{t('Jobs')}</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="fas fa-envelope"></span>
                            <Link to={'/messaging'} className="nav-item-text">{t('Messaging')}</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="fas fa-bell"></span>
                            <Link to={'/notifications'} className="nav-item-text">{t('Notifications')}</Link>
                        </div>
                    </li>
                    <li>
                        <div id="right-border">
                            <img
                                src={imageSrc}
                                alt="Profile picture"
                            />

                            <span className="nav-item-text">
                                Me<span className="fas fa-caret-down"> </span
                                ></span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="fas fa-th"></span>

                            <span className="nav-item-text"
                            >Work<span className="fas fa-caret-down"> </span
                            ></span>
                        </div>
                    </li>
                    <li id="premium">
                        <div>
                            <a href="#">Try Premium Free for 1 Month</a>
                        </div>
                    </li>
                </ul>
            </nav>
          <hr />
          <Routes>
              <Route exact path='/' component={App} />
              <Route path='/mynetwork' component={MyNetwork} />
              <Route path='/jobs' component={Jobs} />
              <Route path='/messaging' component={Messaging} />
              <Route path='/notifications' component={Notifications} />
          </Routes>
        </div>
      </Router>
  </>
}

export default MenuItems
