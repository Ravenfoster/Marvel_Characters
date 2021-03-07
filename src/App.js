import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Main } from './containers/Main'
import { Character } from './containers/Character'



export const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/:id' component={Character} />
      <Redirect to='/' />
    </Switch>
  )
}