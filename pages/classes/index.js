/* eslint-disable react/prop-types */
import { getSortedReviewsData } from '../../lib/posts'
import { css, styled } from '../../styles/stitches.config.js'
import React, { useState } from 'react'
import Header from '../../components/journal/header'
import Table from '../../components/tables/table.js'

const Blog = ({ allPostsData }) => {
    return (
        <div className={canvas()}>
            <Header/>
                <Caption>
                These are the classes I took across the four years at Penn. I try to be brutally honest, and 
                write only from the way I experienced the class - a class I disliked might turn out to be a great class! 
                
                </Caption>
            <Table allPostsData={allPostsData}/>
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
    const allPostsData = getSortedReviewsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default Blog 