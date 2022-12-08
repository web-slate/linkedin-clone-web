import React, { useState } from 'react'
import styles from './ExperienceSummaryCard.module.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddOrEditExperienceModal from './AddOrEditExperienceModal/AddOrEditExperienceModal'

function ExperienceSummaryCard() {
  const [showModal, setShowModal] = useState(false)
  const expAddHandler = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleModalClose = async (bool, channelAdded) => {
    setShowModal(bool)
  }

  return (
    <>
      <article>
        <div class={styles.expHeader}>
          <h2>Experience</h2>
          <span className={styles.expPlus} onClick={expAddHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </div>
        <AddOrEditExperienceModal show={showModal} handleModalClose={handleModalClose} />
      </article>
    </>
  )
}

export default ExperienceSummaryCard
