import { useContext } from 'react'
import { message, Button } from 'antd'
import { ThemeContext } from '@/contexts/themeContext'
import { BulbOutlined, BulbFilled } from '@ant-design/icons'

function ToggleDarkMode() {
    const { isDarkMode, handleToggleTheme } = useContext(ThemeContext)

    return (
        <div>
            <Button onClick={handleToggleTheme} type="default">
                {isDarkMode ? (
                    <span>
                        <BulbOutlined /> Dark Mode
                    </span>
                ) : (
                    <span>
                        <BulbFilled /> Light Mode
                    </span>
                )}
            </Button>
        </div>
    )
}

export default ToggleDarkMode
