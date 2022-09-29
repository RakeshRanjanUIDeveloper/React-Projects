import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Website from './Website'

const Topics = ({match, location, history}) => {
    return (
        <section className="min-height">
            <h1>Topics Component</h1>
            <ul className="topics-list">
                <li><Link to={`${match.path}/website-designing`}>website-designing</Link></li>
                <li><Link to={`${match.path}/website-development`}>website-development</Link></li>
                <li><Link to={`${match.path}/website-testing`}>website-testing</Link></li>
            </ul>
            <Switch>
                <Route path={`${match.path}/:website`} component={Website} />
            </Switch>
        </section>
    )
}

export default Topics
