import React from 'react'
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styes from './CameraIcon.module.css'

function CameraIcon(props) {
  return (
    <FontAwesomeIcon icon={faCamera} className={styes.icon} { ...props }/>
  )
}

export default CameraIcon
