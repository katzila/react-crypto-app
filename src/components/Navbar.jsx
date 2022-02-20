import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, useLocation } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons';

import icon from '../images/cryptocurrency.png'

const Navbar = ({ activeMenu, setActiveMenu }) => {
    let location = useLocation()

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/' >Cryptoverse</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(true)}>
                    <MenuOutlined />
                </Button>
            </div>

            {activeMenu && (
                <Menu theme='dark' defaultSelectedKeys={['/']} selectedKeys={[location.pathname]}>
                    <Menu.Item icon={<HomeOutlined />} key='/'>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} key='/cryptocurrencies'>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />} key='/exchanges'>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />} key='/news'>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}

export default Navbar