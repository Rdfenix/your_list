import React from 'react'

export default (props) => (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1>Your List</h1>
            </div>
            <div className="col-md-6">
                <nav>
                    <ul className="list-inline">
                        <li><a href="#/">Inicio</a></li>
                        <li><a href="#/cadastrar">Cadastrar Contato</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
)