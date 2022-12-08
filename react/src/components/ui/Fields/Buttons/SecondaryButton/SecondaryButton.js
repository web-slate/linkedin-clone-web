import React from 'react'
import styles from './SecondaryButton.module.css'

function SecondaryButton({
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

export default SecondaryButton
