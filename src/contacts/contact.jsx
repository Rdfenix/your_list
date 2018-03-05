import React, {Component} from 'react'
import PageHeader from './header/pageHeader'
import ContactForm from './form/contactForm'
import ContactList from './list/ContactList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/contacts'

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {search: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(search = ''){
        const searchItem = search ? `&name__regex=/${search}/`:''
        axios.get(`${URL}?sort=createdAt${searchItem}`).then((resp) => this.setState({...this.state, search, list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, search: e.target.value})
    }

    handleSearch(){
        this.refresh(this.state.search)
    }

    handleRemove(item){
        axios.delete(`${URL}/${item._id}`).then(resp => this.refresh(this.state.search))
    }

    handleClear(){
        this.refresh()
    }

    render(){
        return (
            <div className="container">
                <PageHeader name="Contatos" small="lista dos seus contatos" />
                <ContactForm handleSearch={this.handleSearch} handleClear={this.handleClear} handleChange={this.handleChange} />
                <ContactList list={this.state.list} handleRemove={this.handleRemove} />
            </div>
        )
    }
}