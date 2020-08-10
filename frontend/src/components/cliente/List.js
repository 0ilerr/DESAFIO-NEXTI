import React from 'react';
import ClienteService from '../services/ClienteService';
import { Link } from "react-router-dom"

class List extends React.Component {
	constructor() {
		super()
		this.state = {
			listCliente: []
		}
	}

	async componentDidMount() {
		const res = await ClienteService.list()
		console.log(res);
		if (res.success) {
			this.setState({ listCliente: res.list })
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
							<th scope="col">Nome</th>
							<th scope="col">CPF</th>
							<th scope="col">Data Nasc.</th>
							<th scope="col">Ações</th>
						</tr>
					</thead>
					<tbody>

						{
							this.state.listCliente.map((data, i) => {
								return (
									<tr>
										<th scope="row">{data.id}</th>
										<td>{data.nome}</td>
										<td>{data.cpf}</td>
										<td>{data.nasc}</td>
										<td>
											<Link to={"/cliente/edit/" + data.id} class="btn btn-light"> Editar </Link>
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

			const res = await ClienteService.delete(id)

			if (res.success) {
				alert(res.message)
				const list = this.state.listCliente
				list.splice(index, 1)
				this.setState({ listCliente: list })
			}
			else {
				alert("Error server ==> " + JSON.stringify(res))
			}
		}
	}
}


export default List