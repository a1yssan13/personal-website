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
    color: '$darkest'
})
const Title = styled('h1', {
    color: '$darkest',
    padding: '0',
    margin: '0', 
    marginBottom: '5px', 
    fontSize: '40px',
    marginTop: '3vh', 
    width: '50rem',
})
const Subtitle = styled('p', {
    display: 'flex', 
    justifyContent: 'left', 
    alignItems: 'center', 
    fontSize: '18px', 
    padding: '0',
    margin: '0', 
    maxWidth: '50rem',
})

export default Layout