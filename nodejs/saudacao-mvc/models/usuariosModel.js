module.exports = {
  gerarMensagemLogin: (login, senha) => {
    let acesso

    if (login == 'Joedio' && senha == '123') {
        acesso = 'liberado'
    } else {
        acesso = 'negado'
    }

    return `Olá, ${login}! seu acesso está ${acesso}.`;
  }
};