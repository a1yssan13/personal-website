/* eslint-disable react/prop-types */
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Box from '../../components/blog/box'
import { css, styled } from '../../styles/stitches.config.js'
import {FiHome} from 'react-icons/fi'
import React, { useState } from 'react'
import Row from '../../components/blog/row'
import MediaQuery from 'react-responsive'

const DESKWIDTH = '36rem'
const MOBILEWIDTH = '20rem'
const DESKHEIGHT = '100vh'
const MOBILEHEIGHT = '70vh'
const TYPES = ['15rem', '18rem', '8rem', '14rem', '10rem', '18rem', '15rem', '10rem', '23rem']
const STARTINGPOSTS = 6
const INTERVALEXPAND = 6
const BOXHEIGHT = '13rem'

const Blog = ({ allPostsData }) => {
    
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
    const BoxBlogList = ({posts}) => {
        return (
            <Layout style='box'>
                {posts.map(({ id, frontMatter }) => {
                iter++
                return (<Box key = {id} title={frontMatter.title} link={`/blog/${id}`} date={frontMatter.date} wid={TYPES[iter % TYPES.length]} height={BOXHEIGHT}/>)
                })}
                {number < allPostsData.length ? <Expand onClick={expand}><ExpandText>More</ExpandText></Expand>: <></>}
            </Layout>
        )
    }
    const RowBlogList = ({posts}) => {
        return (
            <Layout style="row">
                {posts.map(({ id, frontMatter }) => {
                iter++
                return (<Row key = {id} title={frontMatter.title} link={`/blog/${id}`} date={frontMatter.date} wid={MOBILEWIDTH} height={BOXHEIGHT}/>)
                })}
                {number < allPostsData.length ? <ExpandRow onClick={expand}>MORE</ExpandRow>: <></>}
            </Layout>
        )
    }
    return (
        <div className={canvas()}>
         <h1 className={header()}>
             blog
             <Link href='/'>
                 <div className={home()}><FiHome size={60}/></div>
             </Link>
        </h1>
        <MediaQuery minWidth={1024}>
          <BoxBlogList posts={posts}/>
        </MediaQuery>
        <MediaQuery maxWidth={1024}>
          <RowBlogList posts={posts}/>
        </MediaQuery>
        </div>
    )
}

const ExpandRow = styled('button', {
    display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '$darker', 
        width: `${MOBILEWIDTH}`, 
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
    fontSize:'$banner', 
    margin: '20px 30px 0 0', 
    color: 'inherit',
    writingMode: 'vertical-lr'
})
const Expand = styled('button', {
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

const home = css({
    border: '3px solid',
    padding: '10px 10px 0px 10px', 
    borderRadius: '20px', 
    '&:hover':{
        backgroundColor: '$darkest', 
        color: '$background'
    }
})

const header = css({
    fontSize: '$banner', 
    color: '$darkest',
    margin: 'auto', 
    display: 'flex', 
    gap: '20px', 
    alignItems: 'center', 
    '@bp1': {
        width: MOBILEWIDTH, 
        justifyContent: 'center', 
    }, 
    '@bp2': {
        width: DESKWIDTH, 
        justifyContent: 'flex-start', 
    }
})
const canvas = css({
    margin: '10vh 0', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
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
        width: '15px', 
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
                maxHeight: DESKHEIGHT, 
                width: DESKWIDTH, 
            }, 
            row: {
                margin: '20px auto',
                border: '2px dashed $medium', 
                borderRadius: '20px',
                flexDirection: 'column', 
                maxHeight: MOBILEHEIGHT, 
                paddingRight: '15px',
                width: MOBILEWIDTH
            }
        }, 
    }
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