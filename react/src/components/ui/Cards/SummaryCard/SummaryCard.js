import React from 'react'
import EditIcon from '@/components/ui/Icons/EditIcon'
import AddIcon from '@/components/ui/Icons/AddIcon'
import styles from './SummaryCard.module.css'

function SummaryCard({ title, children, containerClassName, actions = [] }) {
  const Icons = {
    editIcon: EditIcon,
    addIcon: AddIcon,
    default: AddIcon,
  }

  return (
    <section className={`${styles.summaryCardContainer} ${containerClassName}`}>
      <div className={styles.summaryCardHeader}>
        <div className={styles.summaryCardHeaderTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.summaryCardHeaderActions}>
          {actions.map(({ icon, ...otherIconProps }) => {
            const Icon = Icons[icon] || Icons.default
            return <Icon {...otherIconProps} />
          })}
        </div>
      </div>
      <div className={styles.summaryCardContent}>{children}</div>
    </section>
  )
}

export default SummaryCard
