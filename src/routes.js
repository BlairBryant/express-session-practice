import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Second from './Components/Second'


export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/second' component={Second} />
    </Switch>
)

