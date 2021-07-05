const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const tituloDaPagina = document.getElementById("page-title");

tituloDaPagina.innerText = "Meu filme favorito é Interestellar";

const subtituloDaPagina = document.getElementById("subtitle");

subtituloDaPagina.innerText = "Meu diretor e produtor de filmes favorito é Cristopher Nolan";

let classeParagrafos = document.getElementsByClassName("paragrafos");

for (index in classeParagrafos) {
    classeParagrafos[index].innerText = "Um novo parágrafo!"
}

classeParagrafos[1].style.color = "springgreen"

const tagSubtitulo = document.getElementsByTagName("h4");

tagSubtitulo[0].style.color = "yellow" 