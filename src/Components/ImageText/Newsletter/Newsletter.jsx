import React from 'react'
import { Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import './Newsletter.css'

export const Newsletter = () => {
    return (
        < Grid container direction="column" alignItems="center" justify="center" className="news">
                <p className="big">Subscribe to our Newsletter</p>
                <p className="small-content">TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
                <Grid className="subscribe">
                    <input type="text" placeholder="Enter your email address"/>
                    <button>Subscribe</button>
                </Grid>
                
        </Grid>
    )
}
