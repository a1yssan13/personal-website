import Link from 'next/link'
import { css, styled } from '../styles/stitches.config.js'
import { format } from 'date-fns'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import React from 'react'
import PropTypes from 'prop-types'
import Header from './journal/header'
import SyntaxHighlighter from 'react-syntax-highlighter'
import MDXComponents from './MDXcomponents'
import { MDXRemote } from 'next-mdx-remote'



const Layout = ({ frontMatter, mdxSource }) => {
    const { title, date, description } = frontMatter
    return (
        <div className={layout()}>
            <Header />
            {/* <Link href={'/blog'}>
                <BsFillArrowLeftCircleFill size={35} />
            </Link> */}
            <Caption>
                <Title> {title} </Title>
                <Subtitle>
                    <DateBlock>{format(new Date(Date.parse(date)), 'MMMM d, yyyy')}</DateBlock>
                    <Descriptor>{description}</Descriptor>
                </Subtitle>
                <MDXRemote {...mdxSource} components={{ SyntaxHighlighter, ...MDXComponents }} />
            </Caption>

        </div>
    )
}


Layout.propTypes = {
    frontMatter: PropTypes.shape({
        title: PropTypes.string.required,
        date: PropTypes.string.required,
        description: PropTypes.string
    })
}

const Caption = styled('p', {
    margin: 'auto',
    color: '$darkest',
    display: 'inline',
    '@bp1': {
        width: '$mobile',
        justifyContent: 'center',
    },
    '@bp2': {
        width: '$desktop',
        justifyContent: 'flex-start',
    }
})

const DateBlock = styled('p', {
    borderRadius: '10px',
    // padding: '2px 15px',
    color: '$medium',
    // backgroundColor: '$medium',
    margin: '0',
})
const Descriptor = styled('i', {
    margin: '10px',
    color: '$darker',
})

const layout = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center',

    // width: 'fit-content',
    margin: 'auto',
    paddingBottom: '0',
    // paddingTop: '1vh',
    color: '$darkest',
    '@bp1': {
        padding: '3rem',
        paddingTop: '3vh',
        paddingBottom: '0',
        // width: '$desktop',

    },
    '@bp2': {
        // width: '$desktop', 
    },
    '@bp3': {
        // alignItems: 'left',
        paddingTop: '10vh',
        paddingBottom: '0',
    }
})
const Title = styled('h1', {
    color: '$darkest',
    padding: '0',
    margin: '0',
    marginBottom: '5px',
    marginTop: '3vh',
    '@bp1': {
        width: '$mobile',
        fontSize: '${h2}',
        textAlign: 'left',
    },
    '@bp3': {
        width: '$desktop',
        fontSize: '${h1}',
        textAlign: 'left',
    }

})
const Subtitle = styled('p', {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    fontSize: '18px',
    padding: '0',
    margin: '0',
    '@bp1': {
        width: 'auto',
        gap: '10px'
    },
    '@bp3': {
        width: '50rem',
    }
})

export default Layout