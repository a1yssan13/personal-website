/* eslint-disable react/prop-types */
import { styled } from '../../styles/stitches.config.js'
import React, { useState } from 'react'
import Row from './row'
import MediaQuery from 'react-responsive'
import Box from './box'

const MOBILEWIDTH = '20rem'
const TYPES = ['23rem', '19rem', '14rem', '14rem', '12rem', '24rem', '18rem', '18rem', '24rem']
const STARTINGPOSTS = 6
const INTERVALEXPAND = 6
const BOXHEIGHT = '17rem'

const BlogHome = ({ allPostsData }) => {
    console.log(allPostsData)
    const [number, setNumber] = useState(STARTINGPOSTS)
    const [posts, setPosts] = useState(allPostsData.slice(0, STARTINGPOSTS))
    let iter = -1
    const expand = () => {
        if (number < allPostsData.length) {
            let index = number + INTERVALEXPAND
            setPosts(allPostsData.slice(0, index))
            setNumber(index)
        }
    }
    const BoxBlogList = ({ posts }) => {
        return (
            <Layout style='box'>
                {posts.map(({ id, frontMatter }) => {
                    iter++
                    return (<Box key={id} title={frontMatter.title} link={`/blog/${id}`} date={frontMatter.date} wid={TYPES[iter % TYPES.length]} height={BOXHEIGHT} />)
                })}
                {number < allPostsData.length ? <Expand onClick={expand}><ExpandText>MORE</ExpandText></Expand> : <></>}
            </Layout>
        )
    }
    const RowBlogList = ({ posts }) => {
        return (
            <Layout style="row">
                {posts.map(({ id, frontMatter }) => {
                    iter++
                    return (<Row key={id} title={frontMatter.title} link={`/blog/${id}`} date={frontMatter.date} wid={MOBILEWIDTH} height={BOXHEIGHT} />)
                })}
                {number < allPostsData.length ? <ExpandRow onClick={expand}>MORE</ExpandRow> : <></>}
            </Layout>
        )
    }
    return (
        <>
            <MediaQuery minWidth={1024}>
                <BoxBlogList posts={posts} />
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                <RowBlogList posts={posts} />
            </MediaQuery>
        </>
    )
}

const ExpandRow = styled('button', {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: '$darker',
    width: `$mobile`,
    '&:hover': {
        backgroundColor: '$medium',
        borderRadius: '20px'
    },
    height: '5rem',
    fontSize: '$h1',
    padding: '10px'
})
const ExpandText = styled('p', {
    width: `10rem`,
    fontSize: '$banner',
    margin: '20px 30px 0 0',
    color: 'inherit',
    writingMode: 'vertical-lr'
})
const Expand = styled('button', {
    cursor: 'pointer',
    color: '$darkest',
    width: `10rem`,
    height: `${BOXHEIGHT}`,
    border: '5px solid',
    borderRadius: '30px',
    overflow: 'hidden',
    marginTop: '0.8rem',
    '&:hover': {
        backgroundColor: '$darkest',
        color: '$background'
    }
})

const Layout = styled('div', {
    margin: 'auto',
    display: 'flex',
    overflow: 'auto',
    padding: '10px',
    '&::-webkit-scrollbar': {
        background: '$medium',
        borderRadius: '10px',
        right: '-30px',
        width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        background: '$darker',
    },
    variants: {
        style: {
            box: {
                alignItems: 'flex-start',
                flexFlow: 'row wrap',
                justifyContent: 'space-between',
                maxHeight: '$desktoph',
                width: '$desktop',
            },
            row: {
                margin: '20px auto',
                border: '2px dashed $medium',
                borderRadius: '20px',
                flexDirection: 'column',
                maxHeight: '$mobileh',
                paddingRight: '15px',
                width: '$mobile',
            }
        },
    }
})

export default BlogHome 