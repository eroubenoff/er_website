import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Radio, Tooltip, Modal, Button, Checkbox} from 'antd'
import './css/App.css'

const RadioButton = Radio.Button
const RadioGroup = Radio.Group


const Footer = () => (
    <div id="footer" style={{minHeight:'48px'}}>
    <Link to=''>Home </Link> | 
    <Link to='Contact'> Contact</Link> | 
    <a href='https://www.site.demog.berkeley.edu/'> UC Berkeley Demography</a>
    </div>
)



export default Footer
