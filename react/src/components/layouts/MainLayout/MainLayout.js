import React, { useEffect } from 'react'

// Components
import { ErrorHandler } from '@/components'
import Spinner from '@/components/common/Spinner/Spinner'
import Header from '@/components/blocks/Header'
import SubHeaderAd from '@/components/blocks/Header/SubHeaderAd'
import SideBarRight from '@/components/blocks/SideBarRight'

const MainLayout = ({ children }) => {
  function waitPageLoading() {
    setTimeout(function () {
      const loadingPage = document.getElementById('loading-page')
      const [container] = document.getElementsByClassName('container')
      const header = document.getElementById('main-header').firstElementChild

      loadingPage.style.display = 'none'
      header.style.display = 'flex'
      container.style.display = 'grid'

      if (navigator.appVersion.indexOf('Chrome/') != -1) {
        const profileName = document.getElementById('profile-name')
        const postAuthorName = document.getElementById('post-author-name')

        const profileSquare = document.getElementById('profile-square')

        const elements = [profileName, postAuthorName]

        console.log(elements)

        elements.map((element) => {
          element.classList.add('letter-spacing')
        })

        profileSquare.classList.add('font-16')
      }
    }, 2000)
  }

  useEffect(() => {
    waitPageLoading()
  }, [waitPageLoading])

  return (
    <ErrorHandler>
      <Header />
      <div className="container">
        <SubHeaderAd />
        {children}
        <SideBarRight />
      </div>
      <Spinner />
    </ErrorHandler>
  )
}

export default MainLayout
