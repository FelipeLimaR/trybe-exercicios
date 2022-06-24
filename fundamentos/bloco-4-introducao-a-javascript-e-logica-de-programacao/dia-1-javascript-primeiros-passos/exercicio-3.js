/*3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.*/

const a = 10;
const b = 5;
const c = 20;

if (a > b && a > c) {
    console.log(a, "é maior que", b, "e", c);
} else if (b > a && b > c) {
    console.log(b, "é maior que", a, "e", c);
} else if (c > a && c > b) {
    console.log(c, "é maior que", a, "e", b);
}