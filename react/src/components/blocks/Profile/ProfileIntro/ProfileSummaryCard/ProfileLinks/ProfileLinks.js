import React from 'react'
import styles from './ProfileLinks.module.css'
import PrimaryButton from '@/components/ui/Fields/Buttons/PrimaryButton'
import OutlinedButton from '@/components/ui/Fields/Buttons/OutlinedButton'
import SecondaryButton from '@/components/ui/Fields/Buttons/SecondaryButton'

function ProfileLinks() {
  return (
    <div className={styles.profileLinksContainer}>
      {
        // TODO: Needs to add dropdown
      }
      <PrimaryButton> Open to </PrimaryButton>
      <OutlinedButton>Add profile section</OutlinedButton>
      <SecondaryButton>More</SecondaryButton>
    </div>
  )
}

export default ProfileLinks
