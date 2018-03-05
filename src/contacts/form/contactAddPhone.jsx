import React, {Component} from 'react'
import axios from 'axios'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/contacts'

export default class AddPhone extends Component {
    constructor(props){
        super(props)
        this.state = {contact: [], phones: [{phone: ''}]}
        this.refresh()
        this.handleAddPhone = this.handleAddPhone.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    refresh(){
        const id = this.props.params.id
        axios.get(`${URL}/${id}`).then(response => this.setState({...this.state,  contact: response.data}))     
    }

    handleChange(id, e){
        const newPhones = this.state.phones.map((phoneItem, sid)=>{
            if(id !== sid) return phoneItem
            return {...phoneItem, phone: e.target.value}
        })
        this.setState({phones: newPhones})
    }

    handleAddPhone(){
        this.setState({phones: this.state.phones.concat([{phone: ''}])})
    }

    render(){
        return(
            <div className="container margin-phone-register">

                <div className="contatos">
                    
                </div>

                <h4>Telefones</h4>
                {this.state.phones.map((phoneItem, id) =>(
                    <div className="row" key={id}>
                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="text" name={`phone${id}`}  onChange={(e) => this.handleChange(id, e)} value={phoneItem.phone} className="form-control" placeholder="Telefone"/>
                            </div>
                        </div>
                    </div>
                ))}
               <IconButton style="success" icon="save" name="Adicionar Telefone" onClick={this.handleAddPhone} />
            </div>
        )
    }
}