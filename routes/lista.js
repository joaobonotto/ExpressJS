var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (agora usando alfabeto grego e 24 números)
    const meusItens = [
      { id: 1, nome: 'Α', descricao: 'Primeiro item da lista com alfabeto grego.' },
      { id: 2, nome: 'Β', descricao: 'Segundo item da nossa lista com alfabeto grego.' },
      { id: 3, nome: 'Γ', descricao: 'Terceiro item usando alfabeto grego.' },
      { id: 4, nome: 'Δ', descricao: 'Quarto item com alfabeto grego.' },
      { id: 5, nome: 'Ε', descricao: 'Quinto item com alfabeto grego.' },
      { id: 6, nome: 'Ζ', descricao: 'Sexto item com alfabeto grego.' },
      { id: 7, nome: 'Η', descricao: 'Sétimo item com alfabeto grego.' },
      { id: 8, nome: 'Θ', descricao: 'Oitavo item com alfabeto grego.' },
      { id: 9, nome: 'Ι', descricao: 'Nono item com alfabeto grego.' },
      { id: 10, nome: 'Κ', descricao: 'Décimo item com alfabeto grego.' },
      { id: 11, nome: 'Λ', descricao: 'Décimo primeiro item com alfabeto grego.' },
      { id: 12, nome: 'Μ', descricao: 'Décimo segundo item com alfabeto grego.' },
      { id: 13, nome: 'Ν', descricao: 'Décimo terceiro item com alfabeto grego.' },
      { id: 14, nome: 'Ξ', descricao: 'Décimo quarto item com alfabeto grego.' },
      { id: 15, nome: 'Ο', descricao: 'Décimo quinto item com alfabeto grego.' },
      { id: 16, nome: 'Π', descricao: 'Décimo sexto item com alfabeto grego.' },
      { id: 17, nome: 'Ρ', descricao: 'Décimo sétimo item com alfabeto grego.' },
      { id: 18, nome: 'Σ', descricao: 'Décimo oitavo item com alfabeto grego.' },
      { id: 19, nome: 'Τ', descricao: 'Décimo nono item com alfabeto grego.' },
      { id: 20, nome: 'Υ', descricao: 'Vigésimo item com alfabeto grego.' },
      { id: 21, nome: 'Φ', descricao: 'Vigésimo primeiro item com alfabeto grego.' },
      { id: 22, nome: 'Χ', descricao: 'Vigésimo segundo item com alfabeto grego.' },
      { id: 23, nome: 'Ψ', descricao: 'Vigésimo terceiro item com alfabeto grego.' },
      { id: 24, nome: 'Ω', descricao: 'Vigésimo quarto item com alfabeto grego.' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    res.render('lista', {
      titulo: 'Minha Lista com Alfabeto Grego',
      itensParaView: meusItens // Passando o array alterado para a view
    });
});

module.exports = router;
