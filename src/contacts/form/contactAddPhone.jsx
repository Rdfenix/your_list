import React, {Component} from 'react'
import axios from 'axios'
import IconButton from '../template/iconButton'

const URL = 'http://localhost:3003/api/contacts'

export default class AddPhone extends Component {
    constructor(props){
        super(props)
        this.state = {phone: '' , phones: [], list: []}
        this.refresh()
    }

    refresh(){
        const id = this.props.params.id
        axios.get(`${URL}/${id}`).then(response => console.log(response))
    }

    render(){
        return(
            <div className="container margin-phone-register">
                <h4>Telefones</h4>
               <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                        <input type="text" name="phone" value={this.props.phone} className="form-control" placeholder="Telefone"/>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
               </div>
            </div>
        )
    }
}