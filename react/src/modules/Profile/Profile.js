import React from 'react'

// Layout
import MainLayout from '@linkedinWeb/components/layouts/MainLayout'

// Components
import ProfileIntro from '@linkedinWeb/components/blocks/Profile/ProfileIntro'

const Profile = () => {
  return (
    <MainLayout>
      <div id="profile-container">
        <ProfileIntro />
      </div>
    </MainLayout>
  )
}

export default Profile
