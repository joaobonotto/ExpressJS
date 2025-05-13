// routes/produtos.js
const express = require('express');
const router = express.Router();

// Lista de produtos com imagens
const produtos = [
  { nome: 'Caneca', imagem: '/img/caneca.jpg' },
  { nome: 'Celular', imagem: '/img/celular.jpg' },
  { nome: 'Console', imagem: '/img/console.jpg' },
  { nome: 'TV', imagem: '/img/tv.jpg' },
  { nome: 'Livro', imagem: '/img/livro.jpg' },
  { nome: 'Controle de Console', imagem: '/img/controle.jpg' },
  { nome: 'Tênis', imagem: '/img/tenis.jpg' },
  { nome: 'Monitor', imagem: '/img/monitor.jpg' },
  { nome: 'Fone de Ouvido', imagem: '/img/fone.jpg' },
  { nome: 'Camiseta', imagem: '/img/camiseta.jpg' },
];

// Rota para a lista de produtos
router.get('/', (req, res) => {
  res.render('produtos', { produtos });
});

module.exports = router;
