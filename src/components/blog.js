import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Icon, Radio, Tooltip, Card, Button, Checkbox, Row, Col} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'

// Blog page that includes the tiled blog posts 


const blogpost(title, text) => ({
    <h1>{title}</h1>
    {text}
}

const blogpostcard(title, text) => ({
})
