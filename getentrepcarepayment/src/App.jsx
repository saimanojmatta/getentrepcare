import { ThemeProvider } from "styled-components"

import theme from './theme'
import GlobalStyle from './globalStyles'
import UI from "./ui"
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles

function App() {
  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <UI />
  </ThemeProvider>
}

export default App
