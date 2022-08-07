import { globalCss } from '../styles/stitches.config';

const oceanTheme = {
    light: {
        colorA: '#150861', 
        colorB: '#736aa8', 
        colorC: '#c5d1e3', 
        backgroundColor: '#F0efe8'
    }
}

const globalStyles = globalCss({
    ...oceanTheme
})

export default globalStyles