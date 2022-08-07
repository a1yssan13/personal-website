/* eslint-disable react/prop-types */
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Box from '../../components/blog/box'
import { css, styled } from '../../styles/stitches.config.js'
import {FiHome} from 'react-icons/fi'
import React, { useState } from 'react'

const WIDTH = '50rem'
const HEIGHT = '100vh'
const TYPES = ['19rem', '28rem', '10rem', '20rem', '16rem', '25rem', '22rem', '16rem', '20rem', '10rem']
const STARTINGPOSTS = 6
const INTERVALEXPAND = 6

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
    console.log(allPostsData)
    return (
        <div className={canvas()}>
         <h1 className={header()}>
             blog
             <Link href='/'>
                 <div className={home()}><FiHome size={60}/></div>
             </Link>
        </h1>
        <div className={layout()}>
            {posts.map(({ id, frontMatter }) => {
                iter++
                return (<Box key = {id} title={frontMatter.title} link={`/blog/${id}`} date={frontMatter.date} wid={TYPES[iter % TYPES.length]} height={'18rem'}/>)
            })}
            {number < allPostsData.length ? <Expand onClick={expand}><ExpandText>More</ExpandText></Expand>: <></>}
        </div>
        </div>
    )
}

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
    height: `18rem`, 
    border: '5px solid', 
    borderRadius: '30px', 
    overflow: 'hidden', 
    marginTop: '1rem', 
    '&:hover': {
        backgroundColor: '$darkest', 
        color: '$background'
    }
})

const home = css({
    border: '3px solid',
    padding: '3px 13px 0px 13px', 
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
    width: WIDTH, 
    display: 'flex', 
    justifyContent: 'flex-start', 
    gap: '20px', 
    alignItems: 'center'
})
const canvas = css({
    margin: '10vh 0', 
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center'
})

const layout = css({
    margin: 'auto', 
    width: WIDTH, 
    display: 'flex', 
    flexFlow: 'row wrap', 
    justifyContent: 'space-between', 
    maxHeight: HEIGHT, 
    overflow: 'auto', 
    padding: '10px', 
    alignItems: 'flex-start', 
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