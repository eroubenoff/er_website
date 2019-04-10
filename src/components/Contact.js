import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Icon, Radio, Tooltip, Card, Button, Checkbox, Row, Col} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'

const cardStyle = {height:'200px'}

export default () =>  (
    <div style={{padding:'30px', textAlign:'center'}}>
     <Row gutter={16}>    
    <Col span={6}>
        <a href="mailto:eroubenoff@gmail.com">
        <Card style ={cardStyle} >
            <Icon type="inbox" />
            <br />
            eroubenoff@berkeley.edu
        </Card>
        </a>
    </Col>
    <Col span={6}>
        <a href="https://www.site.demog.berkeley.edu/">
        <Card style = {cardStyle}>
            <Icon type="mail" />
            <br />
            Department of Demography
            <br />
            2232 Piedmont Ave
            <br />
            Berkeley, CA
        </Card>
        </a>
    </Col>
    <Col span={6}>
        <a href="https://github.com/eroubenoff">
        <Card style = {cardStyle} >
            <Icon type="github" />
            <br />
            https://github.com/eroubenoff
        </Card>
        </a>
    </Col>
    <Col span={6}>
        <a href="https://www.site.demog.berkeley.edu/">
        <Card style = {cardStyle}>
            <Icon type="linkedin" />
            <br />
            https://www.linkedin.com/in/ethan-roubenoff-263a91115/
        </Card>
        </a>
    </Col>
    </Row>
    </div>
)
