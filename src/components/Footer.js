import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Radio, Tooltip, Modal, Button, Checkbox} from 'antd'
import './css/App.css'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group



const Footer = () => (
    <div id="footer" style={{minHeight:'48px'}}>
    <Link to='' style={footerstyle}>Home </Link> | 
    <Link to='Contact' style={footerstyle}> Contact</Link> | 
    <a href='https://www.site.demog.berkeley.edu/' style={footerstyle}> UC Berkeley Demography</a>
    </div>
)



export default Footer
