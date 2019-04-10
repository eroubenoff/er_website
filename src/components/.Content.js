import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Icon, Radio, Tooltip, Card, Button, Checkbox, Row, Col} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'
import ER_in_santacruz from './ER_in_santacruz.jpg'
import ER_CV from './ER_CV_1_19.pdf'

class Placeholder extends React.Component{
    
    shouldComponentUpdate() {
        return true
    }
    
    render() {
        return (<div>"Hello World! Placeholder" {this.props.type} </div>)
    }
}

export const Home = () => (
    <div class="container">
        <img id="home_img" src={ER_in_santacruz} alt="ER In Santa Cruz" /> 
        <div id="home-text">
        Ethan Rounbenoff <br />
        PhD Student <br />
        UC Berkeley Demography <br />
    </div>
    </div>
)


export const Contact= () =>  (
    <div style={{padding:'30px', textAlign:'center'}}>
     <Row gutter={16}>    
    <Col span={6}>
        <Card>
            <Icon type="inbox" />
            <br />
            eroubenoff@berkeley.edu
        </Card>
    </Col>
    <Col span={6}>
        <Card>
            <Icon type="mail" />
            <br />
            Department of Demography
            <br />
            2232 Piedmont Ave
            <br />
            Berkeley, CA
        </Card>
    </Col>
    <Col span={6}>
        <Card>
            <Icon type="github" />
            <br />
            https://github.com/eroubenoff
        </Card>
    </Col>
    <Col span={6}>
        <Card>
            <Icon type="linkedin" />
            <br />
            https://www.linkedin.com/in/ethan-roubenoff-263a91115/
        </Card>
    </Col>
    </Row>
    </div>
)
export const CV = () =>  (
    <div>
    <iframe src={ER_CV} width="100%" height="1000" type="application/pdf">ER CV </iframe>
    </div>
)
export const Research = () => (
    <div>
    <h1>Research</h1>
    </div>
)
