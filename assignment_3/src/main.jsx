import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle.js";
import { theme } from './styles/Theme.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle}/>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
