import React from 'react';
import {Switch, Route} from 'react-router-dom'
import app from './app'
import Cart from './Components/Cart/Cart'
export default(
    <Switch>
    <Route exact path='/' component={app} />
    <Route path='/cart' component={Cart} />
    </Switch>
)