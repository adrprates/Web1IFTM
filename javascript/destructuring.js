const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        log: "Rua ABC",
        num: 100
    }
}

const {nome, idade} = pessoa
//extraia de pessoa nome e idade
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome , bemHumorada)

const {endereco:{log, num, cep}} = pessoa
console.log(log, num, cep)