import Head from 'next/head'
import TextButton from '../components/textbutton'
import Resume from '../components/resume'
import { DiGithubBadge } from 'react-icons/di'
import Boat from '../components/svgs/boat'
import Mountain from '../components/svgs/mountain'
import Stairs from '../components/svgs/stairs'
import { IoMailOpen } from 'react-icons/io5'
import { IoMdJournal } from 'react-icons/io'
import { css, styled } from '../styles/stitches.config.js'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import Toggle from '../components/toggle'
import MediaQuery from 'react-responsive'

const Home = () => {
  const { setTheme } = useTheme()
  const [dark, setDark] = useState(false)
  const [themeNum, setThemeNum] = useState(0)
  const [picture, setPicture] = useState(0)
  const themes = ['', 'forest', 'rain']
  const togglePicture = () => {
    let index = (1 + picture) % 3
    setPicture(index) 
  }
  const toggleDark = () => {
    let string = `${themes[themeNum]}${dark ? 'light' : 'dark'}`
    setTheme(string)
    setDark(!dark)
  }
  const toggleTheme = () => {
    console.log(themeNum)
    let index = (1 + themeNum) % themes.length
    let string = `${themes[index]}${dark ? 'dark' : 'light'}`
    setThemeNum(index)
    setTheme(string)
  }
  return (
    <div>
      <Head>
        <title>alyssa nie </title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={main()}>
        <MediaQuery minWidth={1224}>
          {picture == 2 && <Stairs toggle={togglePicture}/>}
          {picture == 0 && <Boat toggle={togglePicture}/>}
          {picture == 1 && <Mountain toggle={togglePicture}/>}
        </MediaQuery>
        <Container maxWidth={{'@initial': 'desktop', '@bp1': 'mobile'}}>
          <div className={header()}>
            <Title>
              hey! i’m alyssa. 
            </Title>
            <div>
              <Toggle handler={toggleDark}/>
            </div>
          </div>
          <Body>
            I’m an undergrad student at UPenn current in&nbsp;
          </Body>
          <TextButton buttonText = {'Philly'} text={'but from north TX'}/>
          <Body>&nbsp;studying&nbsp;
          </Body>
          <TextButton buttonText = {`computer science`} text = {'currently interested in machine learning, but the to-explore tech list is long'} />
          <Body>
          &nbsp;and business. I like building </Body>
          <TextButton buttonText={'things'} text={'mechanical keyboards, clay structures, random stuff'} />
          <Body>, thinking about self&nbsp;</Body>
          <TextButton buttonText={'help,'} text={'emphasis on thinking here, the helping part...trying my best'}/>
          <Body>
          &nbsp;and taking lots of&nbsp;
          </Body>
          <TextButton buttonText={'walks.'} text={'good take: walks hang outs >> coffee shops.'}/>
          <Body> 
          &nbsp; Otherwise you can find me reading fictional books/blogs, watching kdramas, or playing board games with friends.&nbsp;
          </Body>
          <TextButton buttonText={'Reach'} text={'ig: @alyssan.ie | messenger | alynie@wharton.upenn.edu'}/>
          <Body>
          &nbsp;out and hang out!
          </Body>
          <Contact>
            <div className={clickable()}>
            <Link href='/blog'>
            <Journal> 
                <IoMdJournal size={'40px'}/>
              <Journal className='text'>Journal</Journal>
            </Journal>
            </Link>
            <Journal as="a" href={'/resume.pdf'} target="_blank" rel="noreferrer" passHref={true}>
              <Resume />
            </Journal>
            </div>
            <Icons>
              <Link href='http://github.com/a1yssan13' passHref={true}>
                <DiGithubBadge size={45}/> 
              </Link>
              <Link href='mailto: alynie@wharton.upenn.edu' passHref={true}>
                <IoMailOpen size={45}/>
              </Link>
            </Icons> 
            <Button onClick={toggleTheme}></Button>
          </Contact>
        </Container>
      </main>
    </div>
  )
}
const header = css({
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  color: '$darkest'
})
const main = css({
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}) 
const Container = styled('div', {
    padding: '0 1rem', 
    '@bp1': {
      maxWidth: '20rem'
    }, 
    '@bp3': {
      maxWidth: '40rem',
    }
})
const Icons = styled('div', {
  display: 'flex', 
  alignSelf: 'center', 
}) 
const Contact = styled('div', {
  marginTop: '20px',
  color: '$darkest', 
  display: 'flex',
  alignItems: 'bottom', 
  '@bp1': {
    justifyContent: 'space-between', 
    padding: '0', 
  }, 
  '@bp3': {
    justifyContent: 'right', 
    padding: '0 5%', 
  }
}) 
const Button=styled('button', {
  backgroundColor: '$medium', 
  color: '$darkaccent', 
  width: '43px', 
  height: '43px', 
  border: '5px solid', 
  borderRadius: '10px', 
  padding: '0', 
  '@bp1': {
    margin: 'auto 0px'
  },
  '@bp3': {
    margin: 'auto 10px', 
  }
})
const Body = styled('p', {
    color: '$darkest',
    fontSize: '$paragraph',
    display: 'inline', 
})
const Title = styled('h1', {
  color: '$darkest',
  fontSize: '$h1',
})
const Journal = styled('div', {
    display: 'flex',
    border: '1.8px solid', 
    margin: '4px',
    justifyContent: 'center',
    alignItems: 'center', 
    padding: '3px',
    borderRadius: '10px', 
    width: 'fit-content',
    '&:hover': {
      color: '$background',
      backgroundColor: '$darkest',
    },
    '&.text' : {
      border: 'none', 
      fontSize: '$paragraph', 
      textAlign: 'center', 
      '@bp1': {
        margin: '0px'
      }, 
      '@bp3': {
        margin: '7px', 
      }
    }
})
const clickable = css({
  display: 'flex', 
  '@bp1': {
    flexDirection: 'column', 
    alignItems: 'left', 
    gap: '2px', 
  }, 
  '@bp3': {
    flexDirection: 'row'
  }
})
export default Home