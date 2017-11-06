import { Router, Route, Switch, Redirect } from 'dva/router'
import BasicLayout from './layouts/BasicLayout'
import UserLayout from './layouts/UserLayout'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/hello_world' component={UserLayout} />
        <Route path='/admin' component={BasicLayout} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default RouterConfig
