import React, { Component } from 'react';

import clienteServices from "../services/ClienteService"
import "./Form"

export default class Form extends Component {

	constructor() {
		super();
		this.state = {
			fieldNome: "",
			fieldCpf: "",
			fieldNasc: ""
		}
	}

	render() {
		return (
			<div>
				<h4>Criar Cliente</h4>
				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="nome">Nome Cliente</label>
						<input type="text" class="form-control" placeholder="Nome"
							value={this.state.fieldNome}
							onChange={(event) => this.setState({ fieldNome: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="cpf">CPF</label>
						<input type="text" class="form-control" placeholder="06178695854"
							value={this.state.fieldCpf}
							onChange={(event) => this.setState({ fieldCpf: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="Nasc">Data Nascimento</label>
						<input type="text" class="form-control" placeholder="22/08/1988"
							value={this.state.fieldNasc}
							onChange={(event) => this.setState({ fieldNasc: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<button onClick={() => this.onClickSave()} class="btn btn-primary btn-block" type="submit">Salvar</button>
					</div>
				</div>
			</div>
		)
	}

	async onClickSave() {
		const res = await clienteServices.create(this.state)
		if (res.success) {
			alert(res.message)
			console.log(res);
			window.location.replace("/cliente/index");
		}
		else if (res.status == 400) {
			console.log(res.status);
			const dataError = []
			const error = res.data.errors

			if (error) {
				error.map((itemerror) => {
					console.log(itemerror.defaultMessage);
					dataError.push(itemerror.defaultMessage)
				})
				this.setState({ errorField: dataError })
			}
			else {
				dataError.push(res.data.message)
				this.setState({ errorField: dataError })
			}
		}
		else {
			alert("Error ==>" + JSON.stringify(res))
			console.log(res);
			const dataError = []
			dataError.push(res.message);
			this.setState({ errorField: dataError });
		}
	}

}
