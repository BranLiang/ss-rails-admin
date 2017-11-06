import 'babel-polyfill'
import ReactOnRails from 'react-on-rails'
import HelloWorld from '../bundles/HelloWorld/startup/HelloWorldApp'
import Dashboard from '../bundles/Dashboard'

ReactOnRails.register({
  HelloWorld,
  Dashboard
})
