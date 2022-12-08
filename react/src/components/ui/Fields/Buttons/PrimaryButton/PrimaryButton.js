import React from 'react'
import styles from './PrimaryButton.module.css'

function PrimaryButton({
  children,
  type = 'button',
  onClick,
  disabled = false,
  buttonClassName = '',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${buttonClassName}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
