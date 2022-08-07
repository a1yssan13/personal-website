import Head from 'next/head'
import TextButton from '../components/textbutton'
import Resume from '../components/resume'
import { DiGithubBadge } from 'react-icons/di'
import Boat from '../components/boat'
import { IoMailOpen } from 'react-icons/io5'
import { IoMdJournal } from 'react-icons/io'
import { css, styled } from '../styles/stitches.config.js'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import Toggle from '../components/toggle'

const Home = () => {
  const { setTheme } = useTheme()
  const [dark, setDark] = useState(false)
  const [themeNum, setThemeNum] = useState(0)

  const themes = ['', 'forest', 'rain']
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
        <div>
          <Boat/>
        </div>
        <div className={container()}>
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
            <Link href='/blog'>
            <Journal> 
                <IoMdJournal size={'40px'}/>
              <Journal className='text'>Journal</Journal>
            </Journal>
            </Link>
            <Journal as="a" href={'/resume.pdf'} target="_blank" rel="noreferrer" passHref={true}>
              <Resume />
            </Journal>
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
        </div>
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
const container = css({
    maxWidth: '50rem',
    padding: '0 1rem', 
})
const Icons = styled('div', {
  display: 'flex', 
  alignSelf: 'center', 
}) 
const Contact = styled('div', {
  marginTop: '20px',
  padding: '0 5%', 
  color: '$darkest', 
  display: 'flex',
  justifyContent: 'right', 
  alignContent: 'bottom'
}) 
const Button=styled('button', {
  backgroundColor: '$medium', 
  color: '$darkaccent', 
  width: '43px', 
  height: '43px', 
  border: '5px solid', 
  borderRadius: '10px', 
  margin: 'auto 10px', 
  padding: '0'
})
const Body = styled('p', {
    color: '$darkest',
    fontSize: '22px',
    display: 'inline', 
})
const Title = styled('h1', {
  color: '$darkest',
  fontSize: '40px',
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
      fontSize: '22px', 
      margin: '7px', 
      textAlign: 'center'
    },
})

export default Home