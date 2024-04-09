/* eslint-disable react/prop-types */
import { getAllReviewsIds, getReviewsData } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import SyntaxHighlighter from 'react-syntax-highlighter'
import MDXComponents from '../../components/MDXcomponents'
import Layout from '../../components/bloglayout'
import { css, styled } from '@stitches/react'
import React from 'react'
import Head from 'next/head'

const Post = ({ frontMatter, mdxSource }) => {
  return (
    <div>
      <Head>
        <title>blog</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={canvas()}>
        <Layout frontMatter={frontMatter} mdxSource={mdxSource} />
        <Spacer />
        {/* <div className={layout()}>
          <MDXRemote {...mdxSource} components={{ SyntaxHighlighter, ...MDXComponents }} />
        </div> */}
      </main>
    </div>
  )
}

const canvas = css({  
display: 'flex', 
flexDirection: 'column', 
justifyContent: 'center',

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
  const paths = getAllReviewsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
    const {frontMatter, content} = getReviewsData(params.id)
    const mdxSource = await serialize(content)
    return {
      props: {
        frontMatter, 
        mdxSource
      },
    }
}

export default Post 