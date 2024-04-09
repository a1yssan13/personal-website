/* eslint-disable react/prop-types */
import { css, styled } from '../../styles/stitches.config.js'
import React from 'react'
import Header from '../../components/journal/header'

const Blog = () => {
    return (
        <div className={canvas()}>
            <Header/>
            <Caption>
            
            Here are some of my other hobbies & interests: 

            Reviews here: 


            Mechanical Keyboard build here: 


    


            </Caption>
        </div>
    )
}

const Caption = styled('div', {
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

export default Blog 