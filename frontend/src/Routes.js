import React, { Component } from "react";
import history from "./history";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Cliente from "./components/ClienteRouter";
import Produto from "./components/ProdutoRouter";
import Home from "./components/Home";


class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/pedido/index" exact component={Produto} />
                    <Route path="/produto/index" exact component={Produto} />
                    <Route path="/cliente/index" exact component={Cliente} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;