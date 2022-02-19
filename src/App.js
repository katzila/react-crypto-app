import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News } from './components'
import "./App.css"

const App = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className='app' onClick={() => { if (activeMenu && screenSize < 768) setActiveMenu(false) }}>
            <div className='navbar'>
                <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path='/'>
                                <Homepage />
                            </Route>
                            <Route exact path='/exchanges'>
                                <Exchanges />
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path='/crypto/:coinId'>
                                <CryptoDetails />
                            </Route>
                            <Route exact path='/news'>
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />
                        All right reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App