import React from 'react'
import { Newsletter } from './Newsletter/Newsletter'
import { Testimonial } from './Testimonial/Testimonial'
import img1 from '../../asset/Group 134.png'
import { Grid } from '@material-ui/core'
import './ImageText.css'

export const ImageText = () => {
    return (
        <Grid container direction="row" alignItems="flex-start" className="imgtext">
            <img src={img1} className="left-image"/>
            <Grid className="right-content">
                <Testimonial/>
                <Newsletter/>
            </Grid>
        </Grid>
    )
}
