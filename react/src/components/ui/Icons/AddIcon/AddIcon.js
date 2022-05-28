import React from 'react'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styes from './AddIcon.module.css'

function AddIcon(props) {
  return (
    <FontAwesomeIcon icon={faPlus} className={styes.icon} { ...props }/>
  )
}

export default AddIcon
