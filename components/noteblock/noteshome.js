import { styled } from '../../styles/stitches.config.js'
import React, { useState } from 'react'
import Notebox from './notebox.js'
import { parse, format, getYear, getDate } from 'date-fns'
const EXCERPT_LEN = 275

const NotesHome = ({ allNotesData }) => {
    //write stuff w/ pages here later when it gets too many 
    return (
        <div>
            {allNotesData.map(({ id, frontMatter, content }) => {
                let wordcount = content.split(" ").length
                let dateParsed = parse(frontMatter.date, 'yyyy-M-d', new Date())
                let day = format(dateParsed, 'MMMMMM d, yyyy')
                return (<Notebox title={frontMatter.title} wordcount={wordcount} excerpt={frontMatter.excerpt}
                    date={day} link={`/notes/${id}`} />)
            })}
        </div>
    )
}

// const Container = styled('p', {
//     padding: '',
// })

export default NotesHome
