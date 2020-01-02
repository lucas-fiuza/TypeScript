//Importar bibloteca
import * as _ from 'lodash'


//Declaração de algumas variaveis
let message: string = "Olá Mundo!"
let num: number = 10

console.log(message + " O dia está " + num);

/*
Funções TypeScript, Funções de Seta
*/

//Exemplo 1
function Mensagem(texto: string):string{
    return texto
}

//Exemplo 2 - Com parametro opcional.
let Soma = function(num1: number, num2: number = 0): number {
    return num1 + num2;
}

//Exemplo 3 - Arrow Functions
let Subtracao = ((num1:number,num2:number) => num1 - num2)
Subtracao(5,1)

//Exemplo 4 - Função criada após declaração
let OutraMensagem: (nome: string) => string

OutraMensagem = nome => `Tudo beleza? ${nome}` 

//Exemplo 5 - Funções com arrays e arrays rest
function SomaListaNumeros(numeros: number[]): number{
    return numeros.reduce((a,b) => a + b,0);
}
SomaListaNumeros([1,2,3])

function SomaListaNumerosRest(...numeros: number[]): number{
    return numeros.reduce((a,b) => a + b,0);
}
SomaListaNumerosRest(1,2,3)

/*
    Classe e Interfaces
*/
//Exemplo 1 - Classe
class Carro{
    velocidade: number

    constructor(velocidade: number){
        this.velocidade = velocidade
    }

    RetornaVelocidade(){
        console.log("O carro está a " + this.velocidade + "KM/H")
    }
    
}

//Exemplo 2 - Classe Reduzida
class Aviao{
    constructor(public velocidade: string){}
}

//Exemplo importação
console.log(_.pad("Exemplos TypeScript",40,"="))