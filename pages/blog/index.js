/* eslint-disable react/prop-types */
import { getSortedPostsData } from '../../lib/posts'
import { css, styled } from '../../styles/stitches.config.js'
import React from 'react'
import BlogHome from '../../components/blog/bloghome'
import Header from '../../components/journal/header'

const Blog = ({ allPostsData }) => {
    return (
        <div className={canvas()}>
            <Header/>
            <Caption>
            
            </Caption>
            <BlogHome allPostsData={allPostsData}/>
        </div>
    )
}
const Caption = styled('p', {
    margin: 'auto', 
    color: '$darkest',
    display: 'inline', 
    paddingTop: '1vh', 
    '@bp1': {
        width: '$mobile', 
        justifyContent: 'center', 
    }, 
    '@bp2': {
        width: '$desktop', 
        justifyContent: 'flex-start', 
    }
})
const canvas = css({
    margin: '10vh 0', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
})

export const getStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default Blog 