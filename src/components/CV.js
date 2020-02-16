import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Icon, Radio, Tooltip, Card, Button, Checkbox, Row, Col} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'
import ER_CV from './ER_CV_2_20.pdf'


export default () =>  (
    <div>
    <iframe src={ER_CV} width="100%" height="1000" type="application/pdf">ER CV </iframe>
    </div>
)
