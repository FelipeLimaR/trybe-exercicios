// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.	
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "BISHOP"
let pecaAlt = peca.toLowerCase();

switch (pecaAlt) {
    case "bishop":
        console.log("Diagonal");
        break;

    case "pawn":
        console.log("Uma casa, vertical, captura na diagonal");
        break;

    case "knight":
        console.log("2 casas vertical e 1 casa ou horizontal, ou 2 casas horizontal e 1 casa vertical formando um L");
        break;

    case "king":
        console.log("Uma casa em qualquer direção");
        break;

    case "queen":
        console.log("Quantas casas possíveis em qualquer direção");
        break;

    case "rook":
        console.log("Quantas casas possíves, na vertical ou horizontal");
        break;

    default:
        console.log("Peça inválida")
}