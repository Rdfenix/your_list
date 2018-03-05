import React, {Component} from 'react'
import PageHeader from './header/pageHeader'
import Register from '../contacts/form/contactRegisterForm'
import axios  from 'axios'

const URL = 'http://localhost:3003/api/contacts'

export default class RegisterContact extends Component {
    constructor(props){
        super(props)
        this.state = {userName: '', email: ''}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    //mundança de estado do state dos inputs
    handleChange(e){
        //captura multiplos campos
        this.setState({ [e.target.name]: e.target.value })
    }

    //função adicionar contato
    handleAdd() {
        const name = this.state.userName
        const email = this.state.email
        axios.post(URL, {name, email}).then(response => window.location.reload())
    }

    render() {
        return (
            <div className="container">
                <PageHeader name="Cadastrar contato" smal="" />
                <Register handleChange={this.handleChange} handleAdd={this.handleAdd} userName={this.state.userName} email={this.state.email} />
            </div>
        )
    }
}