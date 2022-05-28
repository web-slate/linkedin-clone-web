import React from 'react'
import styles from './ProfileIntro.module.css'
import ProfileBanner from './ProfileBanner'
import ProfileImage from './ProfileImage'
import ProfileSummaryCard from './ProfileSummaryCard'

function ProfileIntro() {
  return (
    <section className={styles.profileIntroContainer}>
      <ProfileBanner />
      <ProfileImage />
      <ProfileSummaryCard />
    </section>
  )
}

export default ProfileIntro
