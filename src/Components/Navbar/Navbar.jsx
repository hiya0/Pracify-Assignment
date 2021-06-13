import React from 'react'
import { Container, Box, Grid, makeStyles } from '@material-ui/core'
import logo from '../../asset/Group 220.png'
import './Navbar.css'

export const Navbar = () => {

    return (
            <Grid container display="flex" alignItems="center" justify="space-between" flexDirection="row" className="brand-div">
                <Grid item className="nav-items" display="flex" flexDirection="row">
                    <img src={logo}/>
                    <p>organic</p>
                </Grid>
                <Grid item className="list">
                        <a className="list-items">Home</a>
                        <a className="list-items">Products</a>
                        <a className="list-items">Blogs</a>
                        <a className="list-items">About Us</a>
                        <button>Contact</button>
                </Grid>
            </Grid>
    )
}
