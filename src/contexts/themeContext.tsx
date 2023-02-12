import { message } from 'antd'
import React, { createContext, useState, useEffect } from 'react'
import { ConfigProvider, theme, ThemeConfig } from 'antd'
import { BAND_COLORS } from '@/constants'

interface ThemeProviderProps {
    children: React.ReactNode
}

interface ThemeContext {
    isDarkMode: boolean
    handleToggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({
    isDarkMode: false,
    handleToggleTheme: () => {},
})

const { darkAlgorithm, defaultAlgorithm } = theme

function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    function handleToggleTheme() {
        setIsDarkMode((prev) => !prev)
        message.success(isDarkMode ? 'Light Mode' : 'Dark Mode')
    }

    const dark = localStorage.getItem('dark')

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(isDarkMode))
    }, [dark, isDarkMode])

    useEffect(() => {
        if (dark) setIsDarkMode(dark === 'true' ? true : false)
    }, [])

    const themeConfig: ThemeConfig = {
        token: {
            colorPrimary: BAND_COLORS || '#1890ff',
            borderRadius: 8,
            fontFamily: 'Noto Sans Mono ,Noto Sans Thai, sans-serif',
        },
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, handleToggleTheme }}>
            <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
