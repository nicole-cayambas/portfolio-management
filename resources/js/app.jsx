// import './bootstrap';
import React from 'react'
import ReactDOM from 'react-dom/client'
import '../css/app.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";


const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

const App = () => {
    return(
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    Hello world
                </BrowserRouter>
            </ThemeProvider>
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)