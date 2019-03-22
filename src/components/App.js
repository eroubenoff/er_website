import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Modal, Button, Checkbox} from 'antd'
import './css/App.css'
import Header from './Header.js'
import MainContentContainer from './MainContentContainer.js'
import Footer from './Footer.js'


class Placeholder extends React.Component{
    render() {
        return (<div>"Hello World! Placeholder"</div>)
    }
}

const App = () => (
    <div>
        <div id="header">
            <Switch>
                <Route path="/" component={Header}/>
            </Switch>
        </div>
        <div id="main-content">
            <MainContentContainer />
        </div>
        <div id="footer">
            <Footer />
        </div>
    </div>
)


export default App
