import React from 'react'

// Components.
import SideBarLeft from '@/components/blocks/SideBarLeft'
import PostForm from '@/components/blocks/content/PostForm/PostForm'
import PostItemListHeader from '@/components/blocks/content/PostItemList/Header'
import PostItemList from '@/components/blocks/content/PostItemList'

// Layout.
import MainLayout from '@/components/layouts/MainLayout'

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
