import React from 'react'
import styles from './OutlinedButton.module.css'

function OutlinedButton({ children, type='button', onClick, disabled=false, buttonClassName=''}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${styles.button} ${buttonClassName}`}>
       {children}
    </button>
  )
}

export default OutlinedButton
