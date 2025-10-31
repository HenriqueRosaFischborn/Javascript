const model = require('../models/cadastrarModel');

module.exports = {
  produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  },

  formcadastrar: (req, res) => {
    res.sendFile('formcadastrar.html', { root: './views' });
  },

  cadastrar: (req, res) => {
    const {id, descricao, quantidade, preco} = req.body
    const msg = model.gerarMensagemPersonalizada(id, descricao, quantidade, preco)
    
    
    res.send(`<h1>${msg}</h1>`)
  },
};
