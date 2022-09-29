import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import './Navigation.css' ;
import Search from './Search';
import Topics from './Topics';

const Navigation = () => {
    return (
        <Router>
        <div className="topmenu">
            <div className="secInnerPageNave">
                <div className="container-fluid no-padding">
                    <div className="pageName pull-left">React Routing App</div>

                    <nav className="innerPageNave pull-right">
                        <li>
                            <Link to="/" className="tooltips" data-placement="bottom">
                                <i className="fa fa-home">Home</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/topics"><i class="fa fa-sticky-note">Topics</i></Link>
                        </li>
                        <li>
                            <Link to="/search"><i class="fa fa-search">Search</i></Link>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/topics" component={Topics} />
            <Route path="/search" component={Search} />
        </Switch>
        </Router>
    )
}

export default Navigation
