//importando o bootstrap e a font-awesome
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../css/style.css'

//importando itens e componentes do react
import React from 'react'
import MenuHeader from '../header/header'
import Routes from '../routes/routes'

//Tela inicial
export default (props) => (
    <div>
        <MenuHeader />
        <Routes />
    </div>
)