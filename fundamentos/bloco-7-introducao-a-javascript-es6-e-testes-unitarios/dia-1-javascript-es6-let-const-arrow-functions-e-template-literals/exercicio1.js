// 🚀  1 - Altere as variáveis para respeitarem o escopo em que foram declaradas.
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals. 
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
          console.log(ifScope);
      } else {
          let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
          console.log(elseScope);
      }
  }
testingScope(true);

// 🚀 2 - Crie uma função que retorne um array em ordem crescente.
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function(a, b) {
return a - b;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);