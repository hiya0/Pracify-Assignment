import React from 'react'
import leaf from '../../asset/Group 114.png'
import { Grid } from '@material-ui/core'
import img1 from '../../asset/potted.png'
import img2 from '../../asset/containers.png'
import img3 from '../../asset/eucalyptus.png'
import { CardBlog } from './CardBlog'
import './Blog.css'

export const Blog = () => {
    return (
        <Grid>
            <Grid container direction="column" alignItems="center" justify="center" className="blog">
                <img src={leaf}/>
                <p className="big">Read Our Blog</p>
                <p className="small-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
            </Grid>
            <Grid className="card-list">
                <CardBlog imgSrc={img1} head="Blog Post One" content="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod."/>
                <CardBlog imgSrc={img2} head="Blog Post One" content="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod."/>
                <CardBlog imgSrc={img3} head="Blog Post One" content="Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod."/>
            </Grid>
        </Grid>
    )
}
