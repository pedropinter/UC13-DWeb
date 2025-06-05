import { Request, Response } from "express";
import { Produto, produtos } from "../models/Produto";

// Criar um novo produto
export const criarProduto = (req: Request, res: Response) => {
    const { id, nome, preco, desc, quantidade } = req.body;
    if (!id || !nome || !preco || !desc || !quantidade) {
        res.status(400).json({ mensagem: 'Preencha todos os campos' });
        return;
    }

    const novoProduto = new Produto(id, nome, preco, desc, quantidade);
    produtos.push(novoProduto);
    res.status(201).json({ mensagem: "Produto criado com sucesso!", produto: novoProduto });
};

// Listar todos os produtos
export const listarProdutos = (req: Request, res: Response) => {
    res.status(200).json(produtos);
};

// Buscar um produto por ID
export const buscarProdutoPorId = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (!produto) {
        res.status(404).json({ mensagem: "Produto não encontrado" });
        return;
    }

    res.status(200).json(produto);
};

// Atualizar um produto
export const atualizarProduto = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { nome, preco, desc, quantidade } = req.body;

    if (!id || !nome || !preco || !desc || !quantidade) {
        res.status(400).json({ mensagem: 'Preencha todos os campos' });
        return;
    }

    const produto = produtos.find(p => p.id === id);
    if (!produto) {
        res.status(404).json({ mensagem: "Produto não encontrado" });
        return;
    }

    produto.nome = nome;
    produto.preco = preco;
    produto.desc = desc;
    produto.quantidade = quantidade;

    res.status(200).json({ mensagem: "Produto atualizado com sucesso!", produto });
};

// Deletar um produto
export const deletarProduto = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) {
        res.status(404).json({ mensagem: "Produto não encontrado" });
        return;
    }

    produtos.splice(index, 1);
    res.status(200).json({ mensagem: "Produto deletado com sucesso!" });
};
