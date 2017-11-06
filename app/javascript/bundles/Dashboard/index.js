import dva from 'dva'
import React from 'react'
import models from './models'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import RouterConfig from './router'

export default (props) => {
  // 1. Initialize
  let middlewares = []
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  const app = dva({
    history: createHistory(),
    onAction: middlewares
  })

  // 2. Plugins
  // app.use({})

  // 3. Model
  models.forEach((m) => {
    app.model(m)
  })

  // 4. Router
  app.router(RouterConfig)

  const App = app.start()
  return <App />
}
