import { Grid } from '@material-ui/core'
import React from 'react'
import organic from '../../asset/Group 225.png'
import fb from '../../asset/Group 99.png'
import linkedin from '../../asset/Group 100.png'
import insta from '../../asset/Group 105.png'
import twitter from '../../asset/Group 100.png'
import './Footer.css'

export const Footer = () => {
    return (
        <Grid container style={{color:"white"}} direction="row" alignItems="baseline" justify="space-around" className="footer-main">
            <Grid className="col">
                <img src={organic} className="footer-img"/>
                <p className="footer-text" >Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor </p>
                <p className="copy">&copy; Copyright 2020 Nature</p>
            </Grid>
            <Grid className="col-1">
                <p className="heading">Information</p>
                <Grid className="info-col">
                    <Grid className="info-col-2">
                        <a>About Us</a>
                        <a>Contact Us</a>
                        <a>Products</a>
                    </Grid>
                    <Grid className="info-col-2">
                        <a>Contact Us</a>
                        <a>Products</a>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className="col">
                <Grid className="col-1">
                    <p className="heading">Follow Us</p>
                        <Grid className="social-col">
                            <img src={fb} className="social-col"/>
                            <img src={linkedin} className="social-col"/>
                            <img src={insta} className="social-col"/>
                            <a><img src={insta} className="social-col"/></a>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
