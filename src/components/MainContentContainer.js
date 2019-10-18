import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Radio, Tooltip, Modal, Button, Checkbox} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'
import Home from './Home.js'
import CV from './CV.js'
import Research from './Research.js'
import Contact from './Contact.js'
import Teaching from './Teaching.js'


const MainContentContainer = () => (
    <div id="main-content-container">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/cv/" component={CV}/>
            <Route exact path="/research/" component={Research}/>
            <Route exact path="/contact/" component={Contact}/>
            <Route exact path="/teaching/" component={Teaching}/>
        </Switch>
    </div>
)


export default MainContentContainer
