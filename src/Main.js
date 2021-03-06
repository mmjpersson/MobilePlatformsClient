import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import MeasurementTable from "./MeasurementTable";
import Overview from "./Overview";
import lineRechart from "./lineRechart";
import "./Main.css";
import AdminLogin from "./AdminLogin";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Power Display</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Overview</NavLink></li>
                        <li><NavLink to="/Average">Measurements</NavLink></li>
                        <li><NavLink to="/lineRechart">Graph</NavLink></li>
                        <li><NavLink to="/AdminLogin">Admin Login</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Overview}/>
                        <Route path="/Average" component={MeasurementTable}/>
                        <Route path="/lineRechart" component={lineRechart}/>
                        <Route exact path="/AdminLogin" component={AdminLogin}/>

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
