import React from 'react'
import styles from './ProfileImage.module.css'
import ProfileImg from '@/images/v.jpeg'

function ProfileImage() {
  return (
    <div className={styles.ProfileImageFlex}>
      <div className={styles.profileImageContainer}>
        <div className={styles.photoWrapper}>
          <div className={styles.profilePhoto}>
            <img src={ProfileImg} alt="profile image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileImage
