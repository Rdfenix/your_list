import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'



export default (props) => {

    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            props.handleSearch()
        } else if(e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="contactForm">
            <Grid cols="12 9 10">
                <input type="text" id="search" onChange={props.handleChange} onKeyUp={keyHandler} value={props.search} className="form-control" placeholder="Pesquisar" />
            </Grid>
            <Grid cols="12 3 2">
                <IconButton style="primary" icon="search" onClick={props.handleSearch} />
                <IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid>
        </div>
    )
}