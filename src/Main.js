import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import MeasurementTable from "./MeasurementTable";
import Average from "./Average";
import Graphs from "./Graphs";
import "./Main.css";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Measurements</NavLink></li>
                        <li><NavLink to="/Average">Average</NavLink></li>
                        <li><NavLink to="/Graphs">Graphs</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={MeasurementTable}/>
                        <Route path="/Average" component={Average}/>
                        <Route path="/Graphs" component={Graphs}/>

                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
