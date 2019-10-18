import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Icon, Radio, Tooltip, Card, Button, Checkbox, Row, Col} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'
import ER_in_santacruz from './ER_in_santacruz.jpg'

export default () => (
    <div class="container">
        <img id="home_img" src={ER_in_santacruz} alt="ER In Santa Cruz" /> 
        <div id="home-text">
        <p>
        I am a graduate student at the University of California, Berkeley, in the department of Demography.  I am interested in spatial demography methodology and human geography, with a focus on residential inequality,  mobility, and transportation. 
        </p>
        <br />
        <p>
        Currently, I am working on projects relating to demographic small-area estimation using techniques like Kriging and Bayesian hierarchical MCMC.
        </p>
        <br />
        <p>
        Previous research includes: pattern analysis of income and race clustering around Chicago CTA stations; Chicago spatial voter information collection, display, and analysis with the <a href="http://www.cdp.northwestern.edu"> Chicago Democracy Project</a>; and the role of doctor-patient relationships in breast cancer treatment efficacy.
    </p>
    </div>
    </div>
)
