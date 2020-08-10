import React from 'react';
import produtoServices from '../services/ProdutoService';
import { Link } from "react-router-dom"

class List extends React.Component {
	constructor() {
		super()
		this.state = {
			listProduto: []
		}
	}

	async componentDidMount() {
		const res = await produtoServices.list()
		console.log(res);
		if (res.success) {
			this.setState({ listProduto: res.list })
		}
		else {
			alert("Error server ==>" + JSON.stringify(res))
		}
	}

	render() {
		return (
			<section>
				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col">#</th>
							<th scope="col">SKU</th>
							<th scope="col">Nome</th>
							<th scope="col">Descrição</th>
							<th scope="col">Preço</th>
							<th scope="col">Quantidade</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>

						{
							this.state.listProduto.map((data, i) => {
								return (
									<tr>
										<th scope="row">{data.id}</th>
										<td>{data.sku}</td>
										<td>{data.nome}</td>
										<td>{data.descricao}</td>
										<td>{data.preco}</td>
										<td>{data.quantidade}</td>
										<td>
											<Link to={"/produto/edit/" + data.id} class="btn btn-light"> Editar </Link>
											<a onClick={() => this.onClickDelete(i, data.id)}
												href="#" class="btn btn-danger"> Deletar </a>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</section>
		)
	}

	async onClickDelete(index, id) {
		var yes = window.confirm("Tem certeza ao deletar este item?")

		if (yes === true) {

			const res = await produtoServices.delete(id)

			if (res.success) {
				alert(res.message)
				const list = this.state.listProduto
				list.splice(index, 1)
				this.setState({ listProduto: list })
			}
			else {
				alert("Error server ==> " + JSON.stringify(res))
			}
		}
	}
}


export default List