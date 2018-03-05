import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Contact from '../contacts/contact'
import Register from '../contacts/registerContact'
import AddPhone from '../contacts/form/contactAddPhone'

export default (props) => (
    <Router history={hashHistory}>
        <Route path='/' component={Contact} />
        <Route path='/cadastrar' component={Register} />
        <Route path='/:id' component={AddPhone} />
        <Redirect from='*' to='/' />
    </Router>
)