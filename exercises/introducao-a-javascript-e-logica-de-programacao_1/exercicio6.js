let piece;

piece = "Knight";

// condições verificadas no site chesshouse.com porque não sei todas as regras direito de xadrez. Site https://www.chesshouse.com/pages/chess-rules

switch (piece.toLowerCase()) {
    case "king":
        console.log("King moves from its square to a neighboring square");
        break;
    case "rook":
        console.log("Rook move in its line or row");
        break;
    case "bishop":
        console.log("Bishop moves diagonally");
        break;
    case "queen":
        console.log("Queen may move like a Rook or a Bishop")
        break;
    case "knight":
        console.log("Knight jumps in making the shortest move that is not a straight one")
        break;
    case "pawn":
        console.log("Pawn moves one square straight ahead")
        break;
    default:
        console.log("Peça não identificada, por favor usar o nome das peças em Inglês: Rei = King , Torre = Rook, Bispo = Bishop, Rainha = Queen, Cavalo ou Cavaleiro = Knight, Peão = Pawn");
}

