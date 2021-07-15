import { Layout, Menu } from 'antd'
import { Typography, Space } from 'antd'

const { Text } = Typography
const { Header } = Layout

export default function Navbar() {
    return (
        <Layout className="layout">
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ justifyContent: 'flex-end' }}
                >
                    <Menu.Item>{'Home'}</Menu.Item>
                    <Menu.Item>{'Profile'}</Menu.Item>
                    <Menu.Item>{'SignOut'}</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}
