function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));

const imprimirSoma2 = (a, b) => {
    console.log(a + b);
}

imprimirSoma2(2, 3);

const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 3));

const subtracao = (a, b) => a - b;
console.log(subtracao(5, 3));

const imprimir2 = a => console.log(a);
imprimir2("Hello");