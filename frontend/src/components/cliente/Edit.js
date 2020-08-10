import React, { Component } from 'react';

import clienteServices from "../services/ClienteService"

export default class Edit extends Component {

	constructor() {
		super()
		this.state = {
			id: 0,
			fieldNome: "",
			fieldCpf: "",
			fieldNasc: "",
		}
	}

	async componentDidMount() {
		console.log("Mounted edit");
		const id = this.props.match.params.id;
		const res = await clienteServices.get(id)
		console.log(res);
		if (res.success) {
			console.log(res.data);
			this.setState({
				id: res.data.id,
				fieldNome: res.data.nome,
				fieldCpf: res.data.cpf,
				fieldNasc: res.data.nasc
			})
		}
		else {
			alert("Error ==>" + res.message)
		}
	}

	render() {
		let userId = this.props.match.params.id;
		return (
			<div>
				<h4>Editar Cliente {userId}</h4>
				<hr />
				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="nome">Nome Cliente</label>
						<input type="text" class="form-control"
							value={this.state.fieldNome}
							onChange={(event) => this.setState({ fieldNome: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="cpf">CPF</label>
						<input type="text" class="form-control" placeholder="09585695825"
							value={this.state.fieldCpf}
							onChange={(event) => this.setState({ fieldCpf: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="nasc">Data Nascimento</label>
						<input type="text" class="form-control" placeholder="22/08/1988"
							value={this.state.fieldNasc}
							onChange={(event) => this.setState({ fieldNasc: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<button onClick={() => this.onClickUpdate()}
							class="btn btn-primary btn-block" type="submit">Atualizar</button>
					</div>
				</div>
			</div>
		)
	}

	async onClickUpdate() {

		console.log("Execute update");
		const res = await clienteServices.update(this.state)
		if (res.success) {
			alert(res.message)
		}
		else {
			console.log("Error");
			console.log(res);
			alert("Error ===>" + JSON.stringify(res.data))

		}
		window.location.replace("/cliente/index");
	}

}