import dva from 'dva'
import models from './models'
import { browserHistory } from 'dva/router'
import { createLogger } from 'redux-logger'

export default (props) => {
  // 1. Initialize
  let middlewares = []
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  const app = dva({
    history: browserHistory,
    initialState: props,
    onAction: middlewares
  })

  // 2. Plugins
  // app.use({})

  // 3. Model
  models.forEach((m) => {
    app.model(m)
  })

  // 4. Router
  app.router(require('./router'))

  const App = app.start()
  return <App />
}
