import React, { Component } from "react";
import history from "../history";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import List from "./cliente/List";
import Form from "./cliente/Form";
import Edit from "./cliente/Edit";
import Nav from "./ClienteNav"

class ClienteRouter extends Component {
    render() {
        return (
            <Router history={history}>
                <Nav />
                <Switch>
                    <Route path="/cliente/index" exact component={List} />
                    <Route path="/cliente/form" component={Form} />
                    <Route path="/cliente/edit/:id" component={Edit} />
                </Switch>
            </Router>
        );
    }
}

export default ClienteRouter;