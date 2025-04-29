var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (agora usando alfabeto romano)
    const meusItens = [
      { id: 1, nome: 'I', descricao: 'Primeiro item da lista com alfabeto romano.' },
      { id: 2, nome: 'II', descricao: 'Segundo item da nossa lista com alfabeto romano.' },
      { id: 3, nome: 'III', descricao: 'Terceiro item usando números romanos.' },
      { id: 4, nome: 'IV', descricao: 'Quarto item com números romanos.' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    res.render('lista', {
      titulo: 'Minha Lista com Alfabeto Romano',
      itensParaView: meusItens // Passando o array alterado para a view
    });
});

module.exports = router;
