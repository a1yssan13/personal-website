import '../styles/global.css'
import { ThemeProvider } from "next-themes"
import { globalStyles, darkDefault, forestLight, forestDark, rainLight, rainDark } from '../styles/stitches.config'

const App = ({ Component, pageProps }) => {
    globalStyles()
    return (
    <ThemeProvider
        attribute='class'
        defaultTheme='system'
        value={{
            light: 'light', 
            dark: darkDefault.className, 
            forestlight: forestLight.className, 
            forestdark: forestDark.className, 
            raindark: rainDark.className, 
            rainlight: rainLight.className
        }}>
        <Component {...pageProps} />
    </ThemeProvider>
    )
}

export default App