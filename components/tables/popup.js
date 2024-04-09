import React from 'react'
import PropTypes from 'prop-types'
import { styled, css } from '../../styles/stitches.config.js'

const Popup = ({name, instructor, visible}) => {
    return (
        <Wrapper visibility={String(visible)}>
            <td className={weighted()}>{name}</td>
            <td>{instructor}</td>
        </Wrapper>
    )
}

const weighted = css({
    fontWeight: 'bold'
})

const Wrapper = styled('tr', {
    display: 'flex', 
    flexDirection: 'column', 
    minWidth: '200px', 
    width: '10%', 
    fontSize: '$h3', 
    borderRadius: '10px', 
    position: 'absolute', 
    padding: '5px', 
    backgroundColor: '$medium', 
    transform: 'translateX(-105%)',
    variants: {
        visibility: {
          true: { visibility: 'visible' },
          false: { visibility: 'hidden' },
        },
    },
})

Popup.propTypes = {
    name: PropTypes.string.isRequired, 
    instructor: PropTypes.string.isRequired, 
    desciption: PropTypes.string, 
    visible: PropTypes.bool, 
}

export default Popup