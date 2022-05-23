import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Routes from './Routes'

// Components.
import { ErrorHandler } from '@linkedinWeb/components'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <ErrorHandler>
      <Router history={browserHistory} basename="/linkedin-clone-web/react">
        <Routes />
      </Router>
    </ErrorHandler>
  )
}

export default App
