import { Box, Grid } from '@material-ui/core'
import React from 'react'
import img1 from '../../asset/Group 228.png'
import img2 from '../../asset/Group 195.png'
import './LandingPage.css'

export const LandingPage = () => {
    return (
        <Grid container display="flex" flexDirection="row" alignContent="center" justify="space-between" className="main">
            <Grid className="content">
                <p className="small">Healthy Life with</p>
                <h2 className="large">Nature Organic</h2>
                <p className="info">Vegetables are the edible parts of a plant 
                    that is used in cooking or can be eaten now.</p>
                <button className="btn-explore">Explore Now</button>
            </Grid>
            <Grid className="images">
                <img src={img1} className="back-image"/>
                <img src={img2} className="front-image"/>
            </Grid>
        </Grid>
    )
}
