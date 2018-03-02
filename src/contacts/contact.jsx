import React, {Component} from 'react'
import PageHeader from './header/pageHeader'

export default class Contact extends Component {
    render(){
        return (
            <div className="container">
                <PageHeader name="Contatos" small="lista dos seus contatos" />
            </div>
        )
    }
}