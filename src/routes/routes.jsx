import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Contact from '../contacts/contact'
import Register from '../contacts/registerContact'

export default (props) => (
    <Router history={hashHistory}>
        <Route path='/' component={Contact} />
        <Route path='/cadastrar' component={Register} />
        <Redirect from='*' to='/' />
    </Router>
)