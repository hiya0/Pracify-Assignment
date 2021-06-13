import React from 'react'
import { Grid } from '@material-ui/core'
import {Star} from './Star'
import quote from '../../../asset/Group 86.png'
import user from '../../../asset/user.jpg'
import './Testimonial.css'

export const Testimonial = () => {
    return (
        < Grid container direction="column" alignItems="center" justify="center" className="testimonial">
                <img src={quote}/>
                <img src={user} className="user-img"/>
                <p className="name">Jane Doe</p>
                <Grid className="star">
                    <Star/><Star/><Star/><Star/>
                </Grid>
                <p className="text">Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating. 
                    I’ve been roasting a lot of brussel sprouts and
                </p>
                <Grid className="ellipse-variant">
                <p className="test-ellipse-fill"></p>
                <p className="test-ellipse"></p>
                <p className="test-ellipse"></p>
                <p className="test-ellipse"></p>
            </Grid>
        </Grid>
    )
}
