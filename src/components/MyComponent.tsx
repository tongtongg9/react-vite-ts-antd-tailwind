import { message, Button, Typography, theme } from 'antd'
import ToggleDarkMode from './ui/toggles/ToggleDarkMode'

function MyComponent() {
    function handleClick(text?: string) {
        message.success('Hello World! ' + text)
    }

    const {
        token: { colorBgContainer },
    } = theme.useToken()

    return (
        <div
            className="flex h-screen flex-col items-center justify-center gap-6"
            style={{ background: colorBgContainer }}
        >
            <div>
                <img src="/public/vite.svg" className="w-24" />
                <img
                    src="/src/assets/react.svg"
                    className="w-24 animate-spin"
                    style={{
                        animationDuration: '7000ms',
                    }}
                />
            </div>

            <Typography.Title level={2}>Vite - React - TypeScript - Ant-design - Tailwind CSS</Typography.Title>

            <Button onClick={() => handleClick('สวัสดี')} type="primary">
                สวัสดี!
            </Button>

            <Button onClick={() => handleClick('Ant btn')} type="primary">
                Ant btn
            </Button>
            <Button
                onClick={() => handleClick('Ant btn with a tailwind css styles')}
                type="default"
                className="rounded-full border-purple-600 bg-purple-600 font-bold text-white hover:border-purple-700 hover:bg-purple-700 hover:text-white"
            >
                Ant btn with a tailwind css styles
            </Button>
            <ToggleDarkMode />
        </div>
    )
}

export default MyComponent
