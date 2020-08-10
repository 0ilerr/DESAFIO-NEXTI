import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/cliente';

const ClienteService = {};


ClienteService.delete = async (id) => {
	const urlDelete = baseUrl + "/delete/" + id
	const res = await axios.delete(urlDelete)
		.then(response => { return response.data })
		.catch(error => { return error })
	return res;
}

ClienteService.get = async (id) => {
	const urlGet = baseUrl + "/get/" + id
	const res = await axios.get(urlGet)
		.then(response => { return response.data })
		.catch(error => { return error; })
	return res;
}

ClienteService.update = async (state) => {

	const datapost = {
		nome: state.fieldNome,
		cpf: state.fieldCpf,
		nasc: state.fieldNasc,
	}

	const urlUpdate = baseUrl + "/update/" + state.id

	const res = await axios.put(urlUpdate, datapost)
		.then(response => { return response.data })
		.catch(error => { return error.response })

	return res;
}

ClienteService.list = async () => {
	const urlList = baseUrl + "/list"
	const res = await axios.get(urlList)
		.then(response => { return response.data })
		.catch(error => { return error; })
	return res;
}

ClienteService.create = async (state) => {

	const datapost = {
		nome: state.fieldNome,
		cpf: state.fieldCpf,
		nasc: state.fieldNasc
	}

	const urlPost = baseUrl + "/create"

	const res = await axios.post(urlPost, datapost)
		.then(response => { return response.data; })
		.catch(error => { return error.response; })

	return res;
}

export default ClienteService