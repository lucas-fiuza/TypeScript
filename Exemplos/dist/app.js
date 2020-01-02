"use strict";
exports.__esModule = true;
//Importar bibloteca
var _ = require("lodash");
//Declaração de algumas variaveis
var message = "Olá Mundo!";
var num = 10;
console.log(message + " O dia está " + num);
/*
Funções TypeScript, Funções de Seta
*/
//Exemplo 1
function Mensagem(texto) {
    return texto;
}
//Exemplo 2 - Com parametro opcional.
var Soma = function (num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
};
//Exemplo 3 - Arrow Functions
var Subtracao = (function (num1, num2) { return num1 - num2; });
Subtracao(5, 1);
//Exemplo 4 - Função criada após declaração
var OutraMensagem;
OutraMensagem = function (nome) { return "Tudo beleza? " + nome; };
//Exemplo 5 - Funções com arrays e arrays rest
function SomaListaNumeros(numeros) {
    return numeros.reduce(function (a, b) { return a + b; }, 0);
}
SomaListaNumeros([1, 2, 3]);
function SomaListaNumerosRest() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (a, b) { return a + b; }, 0);
}
SomaListaNumerosRest(1, 2, 3);
/*
    Classe e Interfaces
*/
//Exemplo 1 - Classe
var Carro = /** @class */ (function () {
    function Carro(velocidade) {
        this.velocidade = velocidade;
    }
    Carro.prototype.RetornaVelocidade = function () {
        console.log("O carro está a " + this.velocidade + "KM/H");
    };
    return Carro;
}());
//Exemplo 2 - Classe Reduzida
var Aviao = /** @class */ (function () {
    function Aviao(velocidade) {
        this.velocidade = velocidade;
    }
    return Aviao;
}());
//Exemplo importação
console.log(_.pad("Exemplos TypeScript", 40, "="));
