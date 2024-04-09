import React, { useState } from 'react'
import { css, styled } from '../../styles/stitches.config.js'
import Link from 'next/link'

const Notebox = ({ title, excerpt, date, wordcount, link }) => {
    const container = css('div', {
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        border: '3px solid',
        borderColor: '$darker',
        borderRadius: '10px',
        marginBottom: '15px', 
        padding: '15px',
        color: "$darkaccent",
        '&:hover': {
            cursor: 'pointer',
            color: '$darker'
        },
    })

    const timetoread = Math.ceil(wordcount/200)

    return (
        <Link href={link}>
            <div className={container()}>
                <Title>{title}</Title>
                <Excerpt>{excerpt}</Excerpt>
                <Footer>{date} . {wordcount} words . {timetoread} minutes </Footer>
            </div>
        </Link>
    )
}
const Title = styled('h2', {
    margin: '0',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
})

const Excerpt = styled('p', {
    margin: '0',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
})

const Footer = styled('p', {
    margin: '0',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    color: '$medium',
})

export default Notebox 