import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from '../history';
import "./Home";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>DESAFIO-NEXTI</h1>
          <p>Clique para fazer um novo pedido</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/pedido')}>Fazer Pedido</Button>
          </form>
        </div>
      </div>
    );
  }
}
