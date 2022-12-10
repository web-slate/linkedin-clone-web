import React from 'react'
import styles from './ProfileSummaryCard.module.css'
import SummaryCard from '@/components/ui/Cards/SummaryCard/SummaryCard'
import ProfileDetails from './ProfileDetails'
import ProfileLinks from './ProfileLinks'
import CompanyAndEductionLinks from './CompanyAndEducationLinks'
import EditIcon from '@/components/ui/Icons/EditIcon'

function ProfileSummaryCard() {
  const actions = [
    {
      icon: 'editIcon',
      onClick: () => {
        alert('open edit modal')
      },
    },
  ]

  return (
    <SummaryCard title="" containerClassName={styles.summaryCard} actions={actions}>
      <div className={styles.detailsContainer}>
        <ProfileDetails />
        <CompanyAndEductionLinks />
      </div>
      <ProfileLinks />
    </SummaryCard>
  )
}

export default ProfileSummaryCard
