import { css, styled } from '../../styles/stitches.config.js'
import { parse, getMonth, getYear, getDate } from 'date-fns'
import React from 'react'
import PropTypes from 'prop-types'

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 
'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const DateBox = ({ date }) => {
    const dateParsed = parse(date, 'yyyy-M-d', new Date())
    const month = MONTHS[getMonth(dateParsed) - 1]
    const year = getYear(dateParsed) 
    const day = getDate(dateParsed).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    const Day = styled('p', {
        fontSize: '50px', 
        color: '$darkest', 
        margin: '-15px 0', 
        padding: '0'
    })
    const Month = styled('p', {
        fontSize: '33px', 
        color: '$darkest', 
        margin: '0'
    })
    const Year = styled('p', {
        fontSize: '30px', 
        color: '$darkest', 
        margin: '-3px', 
        writingMode: 'vertical-lr'
    })
    const container = css('div', {
        width: 'fit-content', 
        display: 'flex', 
        alignItems: 'center', 
        margin: '20px', 
        padding: '10px 5px 5px 5px', 
        border: '4px solid', 
        borderRadius: '10px', 
    })
    const dateContainer = css('div', {
        display: 'flex',
        flexDirection: 'column',  
        justifyContent: 'center',
    })
    return (
        <div className={container()}>
            <div className={dateContainer()}>
                <Day>{day}</Day>
                <Month>{month}</Month>
            </div>
            <Year>{year}</Year>
        </div>
    )
}

DateBox.propTypes = {
    date: PropTypes.string.isRequired
}

export default DateBox