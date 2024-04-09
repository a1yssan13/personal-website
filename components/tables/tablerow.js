import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Ratings from './star.js'
import { css, styled } from '../../styles/stitches.config.js'
import Popup from './popup.js'
const TableRow = ({courseId, semester, rating, link, name, instructor}) => {
    const [ visible, setVisible ] = useState(false)
    return (
        <>
            <Popup name={name} instructor={instructor} visible={visible}/>
        { link ?
        
        <Link href={link}>
            <Wrapper selectable={true}>
                <Item onMouseEnter={() => setVisible(true)}
                        onMouseLeave={() => setVisible(false)}>{courseId}</Item>
                <Item>{semester}</Item>
                <Item><Ratings size={'20px'} rating={parseInt(rating)}/></Item>
            </Wrapper>
        </Link> : 
        <Wrapper selectable={false}>
            <Item onMouseEnter={() => setVisible(true)}
                    onMouseLeave={() => setVisible(false)}>{courseId}</Item>
            <Item>{semester}</Item>
            <Item><Ratings size={'20px'} rating={parseInt(rating)}/></Item>
        </Wrapper> 
        }
        </>
    )
}
const Wrapper = styled('tr', {
    borderCollapse: 'collapse',
    variants: {
        selectable: {
          true: { 
            cursor: 'pointer', 
            '&:hover': {
                color: '$background',
                backgroundColor: '$medium',
                },
            },
          false: { backgroundColor: '$background' },
        },
    },
})

const Item = styled('td', {
    color: '$darkest', 
    fontSize: '$h3', 
    borderCollapse: 'collapse', 
    padding: '3px 10px'
})

TableRow.propTypes = {
    courseId: PropTypes.string.isRequired, 
    semester: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    instructor: PropTypes.string.isRequired, 
    rating: PropTypes.string, 
    link: PropTypes.string, 
}

export default TableRow