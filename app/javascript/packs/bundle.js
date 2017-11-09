import 'babel-polyfill'
import ReactOnRails from 'react-on-rails'
import HelloWorld from '../bundles/HelloWorld/startup/HelloWorldApp'
import Dashboard from '../bundles/Dashboard'
import Login from '../bundles/Login'

ReactOnRails.register({
  HelloWorld,
  Dashboard,
  Login
})
