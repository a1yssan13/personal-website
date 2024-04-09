import React, { useState } from 'react'
import { css } from '../styles/stitches.config.js'
import PropTypes from 'prop-types'

const button = css({
    color: '$darkest',
    fontSize: '$paragraph',
    textDecoration: 'underline',
    display: 'inline',
    '&:hover': {
        backgroundColor: '$darkest',
        color: '$background',
        borderRadius: '10%',
        textDecoration: 'none',
    }
})
const expanded = css({
    color: '$darker',
    fontSize: '$paragraph',
    display: 'inline',
    backgroundColor: '$medium',
})


const body = css({
    color: '$darkest',
    fontSize: '$paragraph',
    display: 'inline',
})

const TextButton = ({ buttonText, text }) => {
    const [expand, setExpand] = useState('')
    const [style, setStyle] = useState(button())
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setExpand(` (${text})`)
        setStyle(body())
        setClicked(true)
    }
    return (
        <>
            <button onClick={handleClick} type='button' disabled={clicked} className={style}>
                {buttonText}
            </button>
            <div className={expanded()}>
                {expand}
            </div>
        </>
    )
}

TextButton.propTypes = {
    buttonText: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default TextButton 