import React from 'react'
import leaf from '../../asset/Group 114.png'
import img1 from '../../asset/Group 207.png'
import img2 from '../../asset/Group 205.png'
import img3 from '../../asset/Group 39.png'
import img4 from '../../asset/Group 55.png'
import img5 from '../../asset/Group 64.png'
import { Grid } from '@material-ui/core'
import './WelcomePage.css'

export const WelcomePage = () => {
    return (
        <Grid>
            <Grid container direction="column" alignItems="center" justify="center" className="welcome">
                <img src={leaf}/>
                <p className="big">Welcome to Nature</p>
                <p className="small-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
            </Grid>
            <Grid className="img-list">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img1}/>
                <img src={img1}/>
            </Grid>
            <Grid container direction="column" alignItems="center" justify="center" className="presented">
                <p className="big">Proudly Presented By</p>
                <p className="small-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
            </Grid>
            <Grid className="img-list">
                <img src={img3}/>
                <img src={img5}/>
                <img src={img4}/>
                <img src={img5}/>
                <img src={img3}/>
            </Grid>
            <Grid className="ellipse-variant">
                <p className="ellipse"></p>
                <p className="ellipse-aq"></p>
                <p className="ellipse"></p>
                <p className="ellipse"></p>
            </Grid>
        </Grid>
    )
}
