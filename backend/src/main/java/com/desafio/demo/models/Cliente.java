package com.desafio.demo.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "cliente")
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;

	@Pattern(regexp = "^[\\p{L} .'-]+$", message = "The name field may only contain letters")
	@NotNull
	@Column(name = "nome")
	private String nome;

	@NotNull
	@Column(name = "cpf")
	private String cpf;

	@NotNull
	@Column(name = "nasc")
	private String nasc;

	public Cliente() {
		super();
	}

	public Cliente(Integer id, String nome, String cpf, String nasc) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.nasc = nasc;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getNasc() {
		return nasc;
	}

	public void setNasc(String nasc) {
		this.nasc = nasc;
	}

}
