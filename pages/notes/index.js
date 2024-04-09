/* eslint-disable react/prop-types */
import { getSortedNotesData } from '../../lib/posts'
import { css, styled } from '../../styles/stitches.config.js'
import React from 'react'
import Header from '../../components/journal/header'
import NotesHome from '../../components/noteblock/noteshome'

const Blog = ({ allNotesData }) => {
    return (
        <div className={canvas()}>
            <Header />
            <Caption>
                <NotesHome allNotesData={allNotesData} />
            </Caption>

        </div>
    )
}

const Caption = styled('p', {
    margin: 'auto',
    color: '$darkest',
    display: 'inline',
    paddingTop: '2vh',
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
    const allNotesData = getSortedNotesData()
    return {
        props: {
            allNotesData
        }
    }
}


export default Blog 