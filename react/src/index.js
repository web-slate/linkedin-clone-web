import React from 'react'
import ReactDOM from 'react-dom'
import setupLocatorUI from "@locator/runtime";

import App from './App'
import './i18n/config'
import './static/styles.css'

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

ReactDOM.render(<App />, document.getElementById('linkedin-clone-web'))
