// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let array = []

for (let i = 1; i <= 25 ; i += 1) {
    array.push([i])
}

for (const num in array) {
    console.log(num / 2);
}