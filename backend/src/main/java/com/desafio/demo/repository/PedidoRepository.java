package com.desafio.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.desafio.demo.models.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Integer> {

}
