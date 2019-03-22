import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'




ReactDOM.render(
    <BrowserRouter basename="/">
        <LocaleProvider locale={enUS}>
            <App/>
        </LocaleProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
