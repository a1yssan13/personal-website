import { styled } from '../styles/stitches.config.js'

const Paragraph = styled('p', {
    fontSize: '$paragraph', 
    color: '$darkest', 
    margin: '2px', 
    marginBottom: '2vh'
})

const H1 = styled('h2', {
    color: '$darkest', 
    fontSize: '$h1', 
})

const H2 = styled('h2', {
    color: '$darker', 
    fontSize: '$h2', 
    margin: '2px'
})

const H3 = styled('h3', {
    color: '$darker', 
    fontSize: '$h3', 
    margin: '5px'
})

const Box = styled('pre', {
    backgroundColor: '$medium', 
    color: '$darker', 
    border: '2px dashed',
    padding: '20px 0px',
    borderRadius: '20px'
})

const Strong = styled('strong', {
    color: '$darker',
    fontWeight: '900',
    display: 'inline'
})

const Code = styled('code', {
    fontFamily: 'monospace',
    fontSize: '20px',
})

const Blockquote = styled('blockquote', {
    borderLeft: `6px solid $medium`, 
    padding: '2px 20px', 
})

const Link = styled('a', {
    color: '$darker', 
    '&:visited': {
        color: '$medium'
    }, 
    '&:active': {
        color: '$darkest'
    }, 
})

//ordered list 
const UnorderedList = styled( 'ul', {
    fontSize: '$paragraph', 
    color: '$darkest', 
    listStyleType: 'circle',
    '& ul': {
        listStyleType: 'disk'
    }
})

const OrderedList = styled( 'ol', {
    fontSize: '$paragraph', 
    color: '$darkest', 
    listStyleType: 'decimal',
    '& ol': {
        listStyleType: 'lower-alpha'
    }, 
    '& ul': {
        listStyleType: 'circle'
    }
})

const MDXComponents = {
    h1: H1,
    h2: H2,
    h3: H3, 
    p: Paragraph, 
    code: Code, 
    pre: Box, 
    strong: Strong, 
    blockquote: Blockquote,
    a: Link,
    ul: UnorderedList, 
    ol: OrderedList,
}

export default MDXComponents 
