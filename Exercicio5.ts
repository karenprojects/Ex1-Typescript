function saudacao(nome: string, sobrenome?: string): string{
    if (sobrenome){
    return `Olá ${nome} ${sobrenome}`;
    }else{
        return `Olá, ${nome}`;
    }
}

console.log(saudacao("Karen"));
console.log(saudacao("Karen", "Vitoria"));