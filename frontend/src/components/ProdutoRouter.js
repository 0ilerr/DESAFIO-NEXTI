import React, { Component } from "react";
import history from "../history";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

import List from "./produto/List";
import Form from "./produto/Form";
import Edit from "./produto/Edit";
import Nav from "./ProdutoNav"

class ProdutoRouter extends Component {
    render() {
        return (
            <Router history={history}>
                <Nav />
                <Switch>
                    <Route path="/produto/index" exact component={List} />
                    <Route path="/produto/form" component={Form} />
                    <Route path="/produto/edit/:id" component={Edit} />
                </Switch>
            </Router>
        );
    }
}

export default ProdutoRouter;