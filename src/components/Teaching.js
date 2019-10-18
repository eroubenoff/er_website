import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Icon, Radio, Tooltip, Card, Button, Checkbox, Row, Col} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'

export default () => (
    <div class="container">
    <h1>
    Fall 2019
    </h1>
    <p>
    I am currently a GSI for Demography/Sociology c126: Sex, Death, and Data.  I teach section on Tuesday and Thursday from 5-6pm.  Please sign up for office hours here: <a href="https://www.wejoinin.com/sheets/rjpay">https://www.wejoinin.com/sheets/rjpay</a>
    </p>
    <br />

    <h1>
    Tutoring
    </h1>
    <p>
    I offer private tutoring sessions for introductory level computer science, statistics, and social science in Berkeley.  I have extensive experience in statistics and programming in R and Python.  Sample classes include Stat/CS 8, CS 10, Stat 2, Stat 20, Sociology 7, and similar departmental classes. I can also offer tutoring for High School level statistics, AP computer science, or similar courses. 
    </p>
    <br />
    <p>
    I will work with you towards your success in class by focusing on your specific goals and long-term interests.  Every student wants to get something slightly different out of each class, and I will work with you to help achieve those goals by tailoring our sessions to maximize your benefit.  Together we will go through the material, determine target content, and work together for your goals.
    </p>
    <br />
    <p>
    Please email me at eroubenoff dot berkeley dot edu for rates and availability. I mostly have morning sessions easily available but do have some flexibility in the evenings. I look forward to working with you!
    </p>
    </div>
)
