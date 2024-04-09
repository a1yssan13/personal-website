/* eslint-disable react/prop-types */
import { getAllNotesIds, getNotesData } from '../../lib/posts'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '../../components/bloglayout'
import { css, styled } from '@stitches/react'
import React from 'react'
import Head from 'next/head'
import remarkGfm from 'remark-gfm' // Tables, footnotes, strikethrough, task lists, literal URLs.
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'


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
  const paths = getAllNotesIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { frontMatter, content } = getNotesData(params.id)
  const mdxSource = await serialize(content, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, {
        // "fleqn": true,
        "output": "mathml",
        "displayMode": true,
      }]],
    }
  })
  return {
    props: {
      frontMatter,
      mdxSource
    },
  }
}

export default Post 