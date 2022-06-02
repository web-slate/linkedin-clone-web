import React from 'react'
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styes from './EditIcon.module.css'

function EditIcon(props) {
  return (
    <FontAwesomeIcon icon={faPencil} className={styes.icon} { ...props }/>
  )
}

export default EditIcon
