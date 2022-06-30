// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = 0;
let longest;
let menos;
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maior) {
    maior = array[i].length;
    longest = array[i];
  }
  if (array[i].length < maior) {
    maior = array[i].length;
    menos = array[i];
   }
}
console.log(menos);
console.log(longest);