let resultadoJogador = scorePlayer(700,400)
let rankjogador = rank(resultadoJogador)
console.log("O Herói tem de saldo de " + resultadoJogador, "está no nível de "+rankjogador)

function scorePlayer(vitoria,derrota){
    let score = vitoria - derrota
    return score
}
function rank(score) {
    if (score < 10) {
        return "Ferro";
    } else if (score <= 20) {
        return "Bronze";
    } else if (score <= 50) {
        return "Prata";
    } else if (score <= 80) {
        return "Ouro";
    } else if (score <= 90) {
        return "Diamante";
    } else if (score <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}
