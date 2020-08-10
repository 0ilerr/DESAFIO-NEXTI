import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/produto';

const ProdutoService = {};


ProdutoService.delete = async (id) => {
	const urlDelete = baseUrl + "/delete/" + id
	const res = await axios.delete(urlDelete)
		.then(response => { return response.data })
		.catch(error => { return error })
	return res;
}

ProdutoService.get = async (id) => {
	const urlGet = baseUrl + "/get/" + id
	const res = await axios.get(urlGet)
		.then(response => { return response.data })
		.catch(error => { return error; })
	return res;
}

ProdutoService.update = async (state) => {

	const datapost = {
		sku: state.fieldSku,
		nome: state.fieldNome,
		descricao: state.fieldDescricao,
		preco: state.fieldPreco,
		quantidade: state.fieldQuantidade,
	}

	const urlUpdate = baseUrl + "/update/" + state.id

	const res = await axios.put(urlUpdate, datapost)
		.then(response => { return response.data })
		.catch(error => { return error.response })

	return res;
}

ProdutoService.list = async () => {
	const urlList = baseUrl + "/list"
	const res = await axios.get(urlList)
		.then(response => { return response.data })
		.catch(error => { return error; })
	return res;
}

ProdutoService.create = async (state) => {

	const datapost = {
		sku: state.fieldSku,
		nome: state.fieldNome,
		descricao: state.fieldDescricao,
		preco: state.fieldPreco,
		quantidade: state.fieldQuantidade,
	}

	const urlPost = baseUrl + "/create"

	const res = await axios.post(urlPost, datapost)
		.then(response => { return response.data; })
		.catch(error => { return error.response; })

	return res;
}

export default ProdutoService