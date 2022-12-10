import React from 'react'
import styles from './ProfileDetails.module.css'
import Link from '@/components/ui/Link'

// FIXME: Remove harcoded values
const profileData = {
  name: 'Venkatraman Ramamoorthy',
  title: 'Engineering @ PayPal | Ex-Yahoo, Visa, Target, Proximus',
  location: 'Singapore',
}

function ProfileDetails() {
  return (
    <div className={styles.profileDetails}>
      <h2>{profileData.name}</h2>
      <p>{profileData.title}</p>
      <p>
        <span>{profileData.location}</span>{' '}
        <span>
          <Link href="#">Contact Info</Link>
        </span>{' '}
      </p>
    </div>
  )
}

export default ProfileDetails
