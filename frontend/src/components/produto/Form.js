import React, { Component } from 'react';

import produtoServices from "../services/ProdutoService"
import "./Form"

export default class Form extends Component {

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

	render() {
		return (
			<div>
				<h4>Criar Produto</h4>
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
						<button onClick={() => this.onClickSave()} class="btn btn-primary btn-block" type="submit">Salvar</button>
					</div>
				</div>
			</div>
		)
	}

	async onClickSave() {
		const res = await produtoServices.create(this.state)
		if (res.success) {
			alert(res.message)
			console.log(res);
			window.location.replace("/produto/index");
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
