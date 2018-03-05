import React from 'react'
import IconButton from '../template/iconButton'

export default (props) => {

    const renderRows = () =>{
        const list = props.list || []
        return list.map(item => (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                    <IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(item)} />
                    <a className="btn btn-default" href={`#/${item._id}`}><i className="fa fa-pencil"></i></a>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}