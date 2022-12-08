import React from 'react'

// Components.
import SideBarLeft from '@linkedinWeb/components/blocks/SideBarLeft'
import PostForm from '@linkedinWeb/components/blocks/content/PostForm/PostForm'
import PostItemListHeader from '@linkedinWeb/components/blocks/content/PostItemList/Header'
import PostItemList from '@linkedinWeb/components/blocks/content/PostItemList'

// Layout.
import MainLayout from '@linkedinWeb/components/layouts/MainLayout'

function Home() {
  window.addEventListener('scroll', (e) => {
    const profileGroup = document.getElementById('profile-groups')
    const linkedinSection = document.getElementById('linkedin-section')
    const rightAside = document.getElementById('right-aside')

    if (window.scrollY > 356) {
      profileGroup.classList.add('position-fixed')
      linkedinSection.classList.add('position-fixed', 'right-aside-fixed')
      rightAside.classList.add('vanish')
    } else {
      profileGroup.classList.remove('position-fixed')
      linkedinSection.classList.remove('position-fixed', 'right-aside-fixed')
      rightAside.classList.remove('vanish')
    }
  })

  return (
    <MainLayout>
      <SideBarLeft />
      <div id="main-wrapper">
        <main id="main-section">
          <PostForm />
          <PostItemListHeader />
          <PostItemList />
        </main>
      </div>
    </MainLayout>
  )
}

export default Home
