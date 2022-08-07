import Link from 'next/link'
import DateBox from './datebox'
import { css, styled } from '../../styles/stitches.config.js'
import React from 'react'
import PropTypes from 'prop-types'

const Row = ({title, date, link, wid}) => {
    const Text = styled('p', {

        width: `${wid}`, 
        fontSize:'$p', 
        margin: '-10px 10px 0 0', 
        color: '$darker',
    })
    const row = css('div', {
        display: 'flex', 
        alignItems: 'center', 
        color: '$darkest', 
        width: `${wid}`, 
        '&:hover': {
            backgroundColor: '$medium', 
            borderRadius: '20px'
        },
        borderBottom: '2px $medium dashed'
    })
    return (
        <Link href={link}>
            <div className={row()}>
                <DateBox date={date}/>
                <Text>{title}</Text> 
            </div>
        </Link>
    )
}
Row.propTypes = {
    title: PropTypes.string, 
    date: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    wid: PropTypes.string.isRequired, 
    height: PropTypes.string.isRequired, 
}

export default Row 