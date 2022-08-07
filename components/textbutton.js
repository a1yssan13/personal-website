import React, { useState } from 'react'
import { css } from '../styles/stitches.config.js'

const button = css({ 
    color: '$darkest', 
    fontSize: '22px', 
    textDecoration: 'underline', 
    display:'inline', 
    '&:hover' : {
      backgroundColor: '$darkest', 
      color: '$background', 
      borderRadius: '10%', 
      textDecoration: 'none',
    }
}) 
const expanded = css ({
    color: '$darker',
    fontSize: '22px', 
    display: 'inline', 
    backgroundColor: '$medium', 
})
const body = css({
    color: '$darkest',
    fontSize: '22px',
    display: 'inline', 
})

const TextButton = ({ buttonText, text }) => {
    const [expand, setExpand] = useState('')
    const [style, setStyle] = useState(button())
    const [clicked, setClicked] = useState(false)

    const handleClick = e => { 
        setExpand(`(${text})`)
        setStyle(body())
        setClicked(true)
    }
    return ( 
    <>
        <button onClick = {e => handleClick(e)} type = 'button' disabled={clicked} className={style}>
            {buttonText}
        </button>
        <div className={expanded()}> 
        {expand}
        </div>
    </>
    )
}

export default TextButton 