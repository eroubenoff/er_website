import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Breadcrumb, Icon, Radio, Tooltip, Card, Button, Checkbox, Row, Col} from 'antd'
import { compose, mapProps, withHandlers, branch, renderComponent } from 'recompose'
import './css/App.css'

export default () => (
    <div>
        <div style={{width:'400px', float:'left'}}>
        <h1>
        Comparison of Small Area Estimation approaches for Demographic Data
        </h1>
        <p>
        We are working on comparing various methods of estimating demographic vital rates at the subnational level using a suite of small-area estimation techniques, including Kriging, Bayesian Hierarchy, and CAR/SAR/STAR models. There is a rich set of literature applying these techinques to natural phenomena (in mining, weather, and other physical geograhpic fields), but little linking these to human geography or Demography.  This rich collection of models is aimed at an ever-growing corpus of spatial demographic data, remote sensing data, and volunteered geographic data.
        </p>
        </div>

        <div style={{width:'400px', float:'right'}}>
        <h1>
        Using Twitter Geolocation Data to Infer Political Identity
        </h1>
        <p>
        This research focuses on a corpus of tweets collected during the months leading up to the 2016 presidential election.  Using machine learning techniques like LDA and SVM, I am working to determine how geolocation information can help improve predictive accuracy. I am currently seeking collaborators on this project with backgrounds in machine learning and data science.
        </p>

        <br />
        <br />
        <h1> Past Research </h1>
        <p>
        Prior research was conducted in the Sociology and Political Science departments at Northwestern University.  My thesis projec involved identifying income and race clustering patterns around Chicago Transportation Authority (CTA) elevated rail stops. I served as Webmaster for the Chicago Democracy Project, which maintais a geographic database of Chicago-Area elections and demographics.  I also worked on a paper investigating demographic axes in breast cancer doctor-patient relationships.
        </p>
        </div>
    </div>

)
