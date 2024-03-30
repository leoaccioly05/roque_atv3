function avaliarCredito(saldo, historicoCredito, rendaMensal) {
    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
        return "Crédito aprovado";
    } else {
        return "Crédito negado";
    }
}