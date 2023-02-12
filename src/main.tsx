import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import dayjs from 'dayjs'
import ThemeProvider from '@/contexts/themeContext'

import './styles/index.css'
import 'antd/dist/reset.css'
import 'dayjs/locale/th'

dayjs.locale('th') //  'th'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
