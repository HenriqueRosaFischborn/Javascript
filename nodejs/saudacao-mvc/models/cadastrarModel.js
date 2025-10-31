module.exports = {
  gerarMensagemPersonalizada: (id, descricao, quantidade, preco) => {
    

    return `Olá, ${id} ${descricao} ${quantidade} ${preco}`;
  }
};
