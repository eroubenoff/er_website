import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Radio, Tooltip, Modal, Button, Checkbox} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'
import {Home, CV, Research, Contact} from './Content.js'

class Placeholder extends React.Component{
    render() {
        return (<div>"Hello World! Placeholder"</div>)
    }
}

const MainContentContainer = () => (
    <div id="main-content-container">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cv/" component={CV}/>
            <Route exact path="/research/" component={Research}/>
            <Route exact path="/contact/" component={Contact}/>
        </Switch>
    </div>
)


export default MainContentContainer
