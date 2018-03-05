import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default (props) => (
    <div>
        <div className="form-group">
            <label htmlFor="Name">Nome</label>
            <input type="text" name="userName" value={props.userName} onChange={props.handleChange} className="form-control" placeholder="Informe o nome do usuario"/>
        </div>
        <div className="form-group">
            <label htmlFor="Email">E-mail</label>
            <input type="text" name="email" value={props.email} onChange={props.handleChange} className="form-control" placeholder="Informe o seu email"/>
        </div>
        <IconButton style="primary" name="Salvar" onClick={props.handleAdd} />
    </div>
)