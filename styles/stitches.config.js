import { createStitches } from "@stitches/react";
const font = { fontSizes: {
  banner: '53px', 
  h1: '30px',
  h2: '23px',
  h3: '19px', 
  paragraph: '16px'
}}

// const old = { fontSizes: {
//   banner: '70px', 
//   h1: '40px', 
//   h2: '30px', 
//   h3: '25px',
//   paragraph: '22px'
// }}

export const { 
  styled, 
  css, 
  getCssText, 
  theme, 
  createTheme, 
  globalCss 
} = createStitches({ 
  theme: {
    colors: {
      darkest: '#2f2667',
      darker: '#736aa8', 
      medium: '#c5d1e3', 
      background: '#F0efe8',
      darkaccent: '#453e6d'
    }, 
    ...font
  }
 })
// define the dark theme using the de-constructed function
export const darkDefault = createTheme({ 
  colors: { 
    darkest: '#F0efe8',
    darker: '#c5d1e3', 
    medium: '#736aa8', 
    background: '#2f2667',
    darkaccent: '#d5ede2',
  }, 
  ...font
})

export const rainLight = createTheme({
  colors: {
    darkest: '#768AA5',
    darker: '#91B6B3', 
    medium: '#FFC99F', 
    background: '#D9E9F0',
    darkaccent: '#98AECB'
  }, ...font
})

export const rainDark = createTheme({
  colors: {
    darkest: '#D9E9F0', 
    darker: '#FFC99F', 
    medium: '#91B6B3', 
    background: '#769AA5', 
    darkaccent: '#c5dae3'
  }, ...font
})

export const forestLight = createTheme({ 
  colors: { 
    darkest: '#567869',
    darker: '#afc5bd', 
    medium: '#D19380', 
    background: '#f3dbda',
    darkaccent: '#69917c',
  }, ...font
})

export const forestDark = createTheme({ 
  colors: { 
    darkest: '#f3dbda',
    darker: '#D19380', 
    medium: '#afc5bd', 
    background: '#567869',
    darkaccent: '#e6c2c1',
  }, ...font
})

export const globalStyles = globalCss({
    body: {
      background: "$background" 
    }
})