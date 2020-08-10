import React, { Component } from 'react';

import produtoServices from "../services/ProdutoService"

export default class Edit extends Component {

	constructor() {
		super();
		this.state = {
			id: 0,
			fieldSku: "",
			fieldNome: "",
			fieldDescricao: "",
			fieldPreco: "",
			fieldQuantidade: "",
		}
	}

	async componentDidMount() {
		console.log("Mounted edit");
		const id = this.props.match.params.id;
		const res = await produtoServices.get(id)
		console.log(res);
		if (res.success) {
			console.log(res.data);
			this.setState({
				id: res.data.id,
				fieldSku: res.data.sku,
				fieldNome: res.data.nome,
				fieldDescricao: res.data.descricao,
				fieldPreco: res.data.preco,
				fieldQuantidade: res.data.quantidade,
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
				<h4>Editar Produto {userId}</h4>
				<hr />

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="sku">SKU</label>
						<input type="text" class="form-control"
							value={this.state.fieldSku}
							onChange={(event) => this.setState({ fieldSku: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="nome">Nome Produto</label>
						<input type="text" class="form-control"
							value={this.state.fieldNome}
							onChange={(event) => this.setState({ fieldNome: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="descricao">Descrição</label>
						<input type="text" class="form-control"
							value={this.state.fieldDescricao}
							onChange={(event) => this.setState({ fieldDescricao: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="preço">Preço</label>
						<input type="number" class="form-control"
							value={this.state.fieldPreco}
							onChange={(event) => this.setState({ fieldPreco: event.target.value })}
						/>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="col-md-6 mb-3">
						<label for="quantidade">Quantidade</label>
						<input type="number" class="form-control"
							value={this.state.fieldQuantidade}
							onChange={(event) => this.setState({ fieldQuantidade: event.target.value })}
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
		const res = await produtoServices.update(this.state)
		if (res.success) {
			alert(res.message)
		}
		else {
			console.log("Error");
			console.log(res);
			alert("Error ===>" + JSON.stringify(res.data))

		}
		window.location.replace("/produto/index");
	}

}