/*PISCINA – Leia a altura e o raio (ambos em metros) de uma piscina redonda. Calcule e mostre a quantidade de água (em litros) necessária para encher essa piscina completamente. Arredonde o valor para cima.*/

import entrada from "readline-sync";

let altura: number = 0;
let raio: number = 0;
let base: number = 0;
let volume: number = 0;
let litros: number = 0;

console.log("Digite a altura:");
altura = entrada.questionFloat();
console.log("Digite o raio:");
raio = entrada.questionFloat();

base = Math.PI * raio ** 2;

volume = base * altura;

litros = Math.ceil(volume * 1000);

console.log("Precisa de", litros, "litros para encher a piscina");
