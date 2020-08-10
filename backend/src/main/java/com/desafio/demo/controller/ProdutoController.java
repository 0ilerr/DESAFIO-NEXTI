package com.desafio.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.demo.models.Produto;
import com.desafio.demo.repository.ProdutoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/produto")
public class ProdutoController {

	@Autowired
	ProdutoRepository produtoRepository;

	@PostMapping(value = "/create")
	public Map<String, Object> create(@Valid @RequestBody Produto data) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {

			Optional<Produto> validSku = produtoRepository.findBySku(data.getSku());

			if (validSku.isPresent()) {
				response.put("message", "The sku " + data.getSku() + " is already registered ");
				response.put("success", false);
				return response;
			} else {
				produtoRepository.save(data);
				response.put("message", "Successful save");
				response.put("success", true);
				return response;
			}

		} catch (Exception e) {
			// TODO: handle exception
			response.put("message", e.getMessage());
			response.put("success", false);
			return response;
		}

	}

	@RequestMapping(value = { "/list" }, method = RequestMethod.GET)
	public Map<String, Object> list() {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			List<Produto> produtList;
			produtList = produtoRepository.findAll();
			response.put("message", "Successful load");
			response.put("list", produtList);
			response.put("success", true);
			return response;

		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success ", false);
			return response;
		}

	}

	@GetMapping(value = "get/{id}")
	public Map<String, Object> data(@PathVariable("id") Integer id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {

			Optional<Produto> produto = produtoRepository.findById(id);

			if (produto.isPresent()) {
				response.put("message", "Successful load");
				response.put("data", produto);
				response.put("success", true);
				return response;
			} else {
				response.put("message", "Not found data");
				response.put("data", null);
				response.put("success", false);
				return response;
			}

		} catch (Exception e) {
			response.put("message", "" + e.getMessage());
			response.put("success", false);
			return response;
		}
	}

	@PutMapping(value = "/update/{id}")
	public Map<String, Object> update(@PathVariable("id") Integer id, @RequestBody Produto data) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			data.setId(id);
			produtoRepository.save(data);
			response.put("message", "Successful update");
			response.put("success", true);
			return response;
		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success", false);
			return response;
		}

	}

	@DeleteMapping(value = "/delete/{id}")
	public Map<String, Object> update(@PathVariable("id") Integer id) {

		HashMap<String, Object> response = new HashMap<String, Object>();

		try {
			produtoRepository.deleteById(id);
			;
			response.put("message", "Successful delete");
			response.put("success", true);
			return response;
		} catch (Exception e) {
			response.put("message", e.getMessage());
			response.put("success", false);
			return response;
		}

	}
}
