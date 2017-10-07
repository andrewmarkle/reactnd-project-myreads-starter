import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './App'
import Search from './Search'
import NotFound from './NotFound'
import './index.css'

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/books" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
