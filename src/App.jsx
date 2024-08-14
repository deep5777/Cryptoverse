import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Exchange, Cryptocurrencies, Cryptodetails, News } from './components'

import './App.css'

function App() {

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>
        <div className='routes'>
          <Routes>
            <Route path='/' element={<Homepage />}> </Route>
            <Route path='exchanges' element={<Exchange />}> </Route>
            <Route path='cryptocurrencies' element={<Cryptocurrencies />}> </Route>
            <Route path='crypto/:coinId ' element={<Cryptodetails />}> </Route>
            <Route path='news' element={<News />}></Route>
          </Routes>
        </div>


        <div className='footer' >
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All Rights Reserved 2024
          </Typography.Title>

          <Space>
            <Link to={"/"}>Home</Link>
            <Link to={"/exchanges"}>Exchange</Link>
            <Link to={"/news"}>news</Link>
          </Space>
        </div>
      </div>
    </div >
  )
}

export default App
