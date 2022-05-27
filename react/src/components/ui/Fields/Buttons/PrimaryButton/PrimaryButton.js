import React from 'react'
import styles from './PrimaryButton.module.css'

function PrimaryButton({ children, handleOnclick }) {
  return (
    <button
      type="submit"
      onClick={handleOnclick}
      className={styles.submitButton}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
