let estadoCandidato;

estadoCandidato = "reprovada";

switch (estadoCandidato) {
    
    case "aprovada":
        console.log("Aprovado(a)");
        break;

    case "lista":
        console.log("Lista de espera");
        break;
    case "reprovada":
        console.log("Reprovado(a)");
        break;
    default:
        console.log("Não se aplica")  
        break;
}

