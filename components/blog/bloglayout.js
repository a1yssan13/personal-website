import Link from 'next/link'
import { css, styled } from '../../styles/stitches.config.js'
import { format } from 'date-fns'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({frontMatter}) => {
    const {title, date, description} = frontMatter
    return (
        <div className={layout()}>
            <Link href={'/blog'}>
                <BsFillArrowLeftCircleFill size={45}/> 
            </Link>
            <Title> {title} </Title>
            <Subtitle>
                <DateBlock>{format(new Date(Date.parse(date)), 'MMMM d, yyyy')}</DateBlock>
                <Descriptor>{description}</Descriptor>
            </Subtitle>
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

const DateBlock = styled('p', {
    borderRadius: '10px',
    padding: '2px 15px', 
    color: '$background', 
    backgroundColor: '$medium',
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
    width: 'fit-content',
    margin: 'auto',
    paddingTop: '10vh',
    color: '$darkest', 
    '@bp1' : { 
        padding: '3rem',
        paddingTop: '3vh',
    }, 
    '@bp3': {
        alignItems: 'left',
        paddingTop: '10vh',
    }
})
const Title = styled('h1', {
    color: '$darkest',
    padding: '0',
    margin: '0', 
    marginBottom: '5px', 
    marginTop: '3vh', 
    '@bp1' : {
        width: 'auto', 
        fontSize: '${h2}', 
        textAlign: 'center',
    }, 
    '@bp3' : {
        width: '50rem',
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
    '@bp1' : {
        width: 'auto', 
        gap: '10px'
    }, 
    '@bp3' : {
        width: '50rem',
    }
})

export default Layout