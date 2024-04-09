import React from 'react'
import {FaStarHalfAlt, FaStar, FaRegStar} from 'react-icons/fa'
import { styled } from '../../styles/stitches.config.js'
import PropTypes from 'prop-types'


const Ratings = ({rating, size}) => {
    const stars = [1, 2, 3, 4, 5]
    const starGenerator = (num) => {
        if (num <= rating) {
            return <FaStar size={size}/>
        } else if (num - 1 < rating) {
            return <FaStarHalfAlt size={size}/>
        } else {
            return <FaRegStar size={size}/>
        }
    }
    return (
        <Wrapper>
        {rating ? stars.map((star) => {
            return <Defined key={star}>{starGenerator(star)}</Defined>
        }): stars.map((star) => {
            return <Undefined key={star}><FaRegStar size={size}/></Undefined>
        })}
        </Wrapper>
    )
}
const Undefined = styled('div', {
    margin: '0px', 
    color: '$medium'
})
const Defined = styled('div', {
    margin: '0px', 
    color: '$darkest'
})
const Wrapper = styled('div', {
    display: 'flex', 
    flexDirection: 'row', 

    margin: '0px'
})
Ratings.propTypes = {
    rating: PropTypes.number,
    size: PropTypes.string.isRequired, 
}
export default Ratings