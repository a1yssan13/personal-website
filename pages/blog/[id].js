/* eslint-disable react/prop-types */
import { getAllPostsIds, getPostData } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SyntaxHighlighter from 'react-syntax-highlighter'
import MDXComponents from '../../components/MDXcomponents'
import Layout from '../../components/blog/bloglayout'
import { css, styled } from '@stitches/react'
import React from 'react'

const Post = ({ frontMatter, mdxSource }) => {
  return (
    <>
      <article className={canvas()}>
        <Layout frontMatter={frontMatter} />
        <Spacer/>
        <div className={layout()}>
          <MDXRemote {...mdxSource} components={{ SyntaxHighlighter, ...MDXComponents }} />
        </div>
      </article>
    </>
  )
}


const canvas = css({
  margin: '15vh 0'
})
const Spacer = styled('p', {
  padding: '3px'
})
const layout = css({
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'left',
  justifyContent: 'center',
  width: 'fit-content',
  margin: 'auto',
  maxWidth: '50rem'
})

export async function getStaticPaths() {
  const paths = getAllPostsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
    const {frontMatter, content} = getPostData(params.id)
    const mdxSource = await serialize(content)
    return {
      props: {
        frontMatter, 
        mdxSource
      },
    }
}

export default Post 