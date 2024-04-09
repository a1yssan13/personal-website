import React from 'react'
import { styled, css } from '../../styles/stitches.config.js'
import TableRow from './tablerow.js'

const DIRECTORY = 'classes'

const Table = ({ allPostsData }) => {
    console.log(allPostsData)
    return (
        <table className={layout()}>
            <thead>
                <tr className={row()}>
                    <Category size="three">Class</Category>
                    <Category size="two">Semester</Category>
                    <Category size="one">Rating</Category>
                </tr>
            </thead>
            <tbody>
                {allPostsData.map(({ id, frontMatter }) => {
                    let hasLink = false
                    if (frontMatter.blog == "true") {
                        hasLink = true
                    }
                    return (<TableRow key={frontMatter.courseId} courseId={frontMatter.courseId}
                        semester={frontMatter.semester} rating={frontMatter.rating} link={frontMatter.blog == "True" ? `/${DIRECTORY}/${id}` : null}
                        name={frontMatter.name} instructor={frontMatter.instructor} />)
                })
                }
            </tbody>
        </table>
    )
}

const row = css({
    fontSize: '$h3',
    width: '100%',
})

const Category = styled('th', {
    color: '$darkest',
    textAlign: 'left',
    padding: '10px',
    variants: {
        size: {
            one: { width: '15%' },
            two: { width: '35%' },
            three: { width: '50%' }
        },
    },
})

const layout = css({
    border: '1px solid $darkest',
    margin: 'auto',
    borderCollapse: 'collapse',
    '&::-webkit-scrollbar': {
        background: '$medium',
        borderRadius: '10px',
        right: '-30px',
        width: '15px',
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        background: '$darker',
    },
    '@bp1': {
        width: '$mobile',
    },
    '@bp2': {
        width: '$desktop',
    }
})

export default Table 