import React from 'react'
import styles from './ProfileBanner.module.css'
import ProfileBackgroundImage from '@linkedinWeb/images/profile_bg.svg'
import CameraIcon from '@linkedinWeb/components/ui/Icons/CameraIcon'

function ProfileBanner() {
  return (
    <div>
      <div className={styles.cameraIcon}>
        <CameraIcon />
      </div>
      <img src={ProfileBackgroundImage} alt="profileBanner" />
    </div>
  )
}

export default ProfileBanner
