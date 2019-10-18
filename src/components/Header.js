import React from 'react'
import { Redirect, Switch, Route, Link } from 'react-router-dom'
import { Menu, Icon, Radio, Tooltip, Modal, Button, Checkbox} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'

const style = {display: 'inline-block', marginRight: '20px'}

const ErrorRedirect = ({url}) => <Redirect to={`/?err=500&err_url=${url}`}/>

const HeaderContainer = ({
    currentLocation, 
    onDisplayChange,
    history
}) => (
    <div id="header" style={{minHeight:'48px'}}>
	<div style={{minWidth:'130px', marginRight:'10px', display:'inline-block'}}>
            <Link to="" style={{color:'rgb(0, 0, 0, 0.65)'}}>Ethan Roubenoff</Link>
        </div>

	<Menu style={{display: 'inline-block',float: 'right'}}
                    mode="horizontal"
		    onClick={onDisplayChange}>
	    <Menu.Item key="cv">CV</Menu.Item>
	    <Menu.Item key="research">Research</Menu.Item>
	    <Menu.Item key="contact">Contact</Menu.Item>
            <Menu.Item key="teaching">Teaching</Menu.Item>
	</Menu>
    </div>
)



export default compose(
    mapProps( ({match, history}) => ({
        currentLocation: match.params,
        history: history
    })),
    withHandlers({
        onDisplayChange: ({history}) => ({key}) =>
            history.push(
                `/${key}/`
    )})
)(HeaderContainer)
