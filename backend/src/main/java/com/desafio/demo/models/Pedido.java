package com.desafio.demo.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pedido")
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;

	@NotNull
	@JoinColumn(name = "cliente")
	@OneToOne(fetch = FetchType.LAZY)
	private Cliente cliente;

	@Column(name = "total")
	private double total;

	@Column(name = "data")
	private String data;

	@Column(name = "produtos")
	@OneToMany
	private List<Produto> produtoos;

	public Pedido() {
		super();
	}

	public Pedido(Integer id, Cliente cliente, double total, String data, List<Produto> produtoos) {
		super();
		this.id = id;
		this.cliente = cliente;
		this.total = total;
		this.data = data;
		this.produtoos = produtoos;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public List<Produto> getProdutoos() {
		return produtoos;
	}

	public void setProdutoos(List<Produto> produtoos) {
		this.produtoos = produtoos;
	}

}
