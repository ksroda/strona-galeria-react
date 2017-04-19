import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Redirect, browserHistory } from 'react-router'

// import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'
// import createLogger from 'redux-logger'

import About from './views/About/About'
import Contact from './views/Contact/Contact'
import Home from './views/Home/Home'
import Main from './views/Main/Main'
import Sculptures from './views/Arts/Sculptures/Sculptures'
import Detailed from './views/Arts/Detailed/Detailed'

import reducer from './reducers'

// injectTapEventPlugin()
// const logger = createLogger()
const store = createStore(reducer) // , applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from="/" to="home" />

      <Route path="/" component={Home}>
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="home" component={Main} />
        <Route path="sculptures" component={Sculptures} />
        <Route path="sculptures/:id" component={Detailed} />

      </Route>

      <Redirect from="*" to="home" />
    </Router>
  </Provider>,
  document.getElementById('app') // eslint-disable-line
)

