function atualizarCadastro(cadastroAtivo, saldo) {
    if (cadastroAtivo) {
        if (saldo > 0) {
            return "Cadastro ativo e saldo positivo";
        } else {
            return "Cadastro ativo mas precisa regularizar saldo";
        }
    } else {
        return "Por favor, atualize seu cadastro";
    }
}
