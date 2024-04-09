import { styled, css } from '../../styles/stitches.config.js'
import React from 'react'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'
import { useRouter } from "next/router";

const Header = () => {
    const { asPath } = useRouter();
    const changeColor = (target) => {
        console.log(asPath)
        if (asPath === `/${target}`) {
            return 'true'
        } else {
            return 'false'
        }
    }
    const Tab = (path) => {
        return (
            <Link href={`/${path}`}>
                <Button onTab={changeColor(path)}>
                    {path}
                </Button>
            </Link>
        )
    }
    return (
        <>
            <div className={header()}>
                {Tab('notes')}
                {Tab('classes')}
                {Tab('blog')}
                {Tab('other')}
                <Link href='/'>
                    <div className={home()}><FiHome size={30} /></div>
                </Link>
            </div>
        </>
    )
}

const Button = styled('div'
    , {
        cursor: 'pointer',
        display: 'flex',
        padding: '0px 5px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        width: 'fit-content',
        '&:hover': {
            color: '$background',
            backgroundColor: '$darkest',
        },
        '&.text': {
            border: 'none',
            fontSize: '$paragraph',
            textAlign: 'center',
            '@bp1': {
                margin: '0px'
            },
            '@bp3': {
                margin: '7px',
            },
        },
        variants: {
            onTab: {
                true: {
                    backgroundColor: '$medium'
                },
                false: { backgroundColor: '$background' },
            },
        },
    })

const header = css({
    fontSize: '$h3',
    color: '$darkest',
    margin: 'auto',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '5px solid $medium',
    '@bp1': {
        width: '$mobile',
        justifyContent: 'end',
    },
    '@bp2': {
        width: '$desktop',
        justifyContent: 'end',
    }
})

const home = css({
    cursor: 'pointer',
    color: '$darkest',
    '&:hover': {
        color: '$darkaccent',
    }
})

export default Header 