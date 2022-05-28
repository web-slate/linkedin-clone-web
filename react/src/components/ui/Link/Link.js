import React from 'react'
import styles from './Link.module.css'

function Link({ href='', children, onClick, className='' }) {
  return (
    <a href={href} onClick={onClick} className={`${styles.link} ${className}`}>
      {children}
    </a>
  )
}

export default Link
