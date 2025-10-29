const users = require('../models/usuariosModel')

module.exports = {
  clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },

  login: (req, res) => {
    res.sendFile('login.html', { root: './views' });
  },

  formulario: (req, res) => {
    
    const {login, senha} = req.body
    const msg = users.gerarMensagemLogin(login, senha)


    res.send(`<h1>${msg}</h1>`)
  },
};
