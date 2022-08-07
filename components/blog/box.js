import Link from 'next/link'
import DateBox from './datebox'
import { css, styled } from '../../styles/stitches.config.js'
import boxStyle from './box.module.css'
import React from 'react'
import PropTypes from 'prop-types'

const Box = ({title, date, link, wid, height}) => {
    const Text = styled('p', {
        width: `${wid}`, 
        fontSize:'$h1', 
        margin: '-20px 30px 0 0', 
        color: '$medium',
    })
    const block = css('div', {
        color: '$darkest', 
        width: `${wid}`, 
        height: `${height}`, 
        border: '5px solid', 
        borderRadius: '30px', 
        overflow: 'hidden', 
        marginTop: '1rem', 
    })
    return (
        <Link href={link}>
            <div className={block()} id={boxStyle.box}>
                <DateBox date={date}/>
                <Text>{title.toLowerCase()}</Text> 
            </div>
        </Link>
    )
}
Box.propTypes = {
    title: PropTypes.string, 
    date: PropTypes.string.isRequired, 
    link: PropTypes.string.isRequired, 
    wid: PropTypes.string.isRequired, 
    height: PropTypes.string.isRequired, 
}

export default Box 