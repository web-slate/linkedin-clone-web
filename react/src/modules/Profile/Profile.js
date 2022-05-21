import React from 'react'

// Layout
import MainLayout from '@linkedinWeb/components/layouts/MainLayout'

// Components
import ProfileIntro from '@linkedinWeb/components/blocks/Profile/ProfileIntro'
import ExperienceSummaryCard from '../../components/blocks/Profile/ExperienceSummaryCard/ExperienceSummaryCard'

const Profile = () => {
  return (
    <MainLayout>
      <div id="profile-container">
        <ProfileIntro />
        <ExperienceSummaryCard />
      </div>
    </MainLayout>
  )
}

export default Profile
