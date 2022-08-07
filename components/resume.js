import { BsFillArrowDownRightCircleFill } from 'react-icons/bs'
import { css } from '../styles/stitches.config.js'
import React from 'react'

const text = css({ 
  fontSize: '22px', 
  margin: '7px', 
  textAlign: 'center', 
}) 

const container = css({
  display: 'flex', 
  margin: '4px', 
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: '0 2%',
  width: 'fit-content', 
  '&:hover': {
    backgroundColor: '$darkest', 
    color: '$background'
  }
}) 

const Resume = () => {
    return (
      <div className={container()}>
        <BsFillArrowDownRightCircleFill size={26} />
        <p className={text()}> Resume </p>
      </div> 
    )
}

export default Resume 