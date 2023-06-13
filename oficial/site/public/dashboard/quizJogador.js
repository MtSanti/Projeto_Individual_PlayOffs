// Lista de perguntas
var perguntas_jogador = [
    {
        pergunta: "Sou armador do Los Angeles Lakers, camisa número 1, e tenho 27 anos.",
        options: {
            a: "LeBron James",
            b: "Anthony Davis",
            c: "Russell Westbrook",
            d: "D'Angelo Russell"
        },
        resposta: "d"
    },
    {
        pergunta: "Sou ala-pivô do Phoenix Suns, camisa número 35, e tenho 34 anos.",
        options: {
            a: "Kevin Durant",
            b: "James Harden",
            c: "Kyrie Irving",
            d: "Joe Harris"
        },
        resposta: "a"
    },
    {
        pergunta: "Sou armador do Phoenix Suns, camisa número 3, e tenho 38 anos.",
        options: {
            a: "Deandre Ayton",
            b: "Devin Booker",
            c: "Chris Paul",
            d: "Mikal Bridges"
        },
        resposta: "c"
    },
    {
        pergunta: "Sou pivô do Philadelphia 76ers, camisa número 21, e tenho 29 anos.",
        options: {
            a: "Joel Embiid",
            b: "Ben Simmons",
            c: "Tobias Harris",
            d: "Seth Curry"
        },
        resposta: "a"
    },
    {
        pergunta: "Sou ala-armador do Cleveland Cavaliers, camisa número 45, e tenho 26 anos.",
        options: {
            a: "Joe Ingles",
            b: "Rudy Gobert",
            c: "Mike Conley",
            d: "Donovan Mitchell"
        },
        resposta: "d"
    },
    {
        pergunta: "Sou ala do Milwaukee Bucks, camisa número 22, e tenho 31 anos.",
        options: {
            a: "Giannis Antetokounmpo",
            b: "Khris Middleton",
            c: "Jrue Holiday",
            d: "Brook Lopez"
        },
        resposta: "b"
    },
    {
        pergunta: "Sou pivô do Denver Nuggets, camisa número 15, e tenho 28 anos.",
        options: {
            a: "Aaron Gordon",
            b: "Michael Porter Jr.",
            c: "Nikola Jokic",
            d: "Will Barton"
        },
        resposta: "c"
    },
    {
        pergunta: "Sou armador do Atlanta Hawks, camisa número 11, e tenho 24 anos.",
        options: {
            a: "Trae Young",
            b: "John Collins",
            c: "Bogdan Bogdanovic",
            d: "Clint Capela"
        },
        resposta: "a"
    },
    {
        pergunta: "Sou ala-armador do Los Angeles Clippers, camisa número 2, e tenho 32 anos.",
        options: {
            a: "Paul George",
            b: "Kawhi Leonard",
            c: "Marcus Morris Sr.",
            d: "Reggie Jackson"
        },
        resposta: "b"
    },
    {
        pergunta: "Sou pivô do Dallas Mavericks, camisa número 6, e tenho 24 anos.",
        options: {
            a: "Luka Doncic",
            b: "Kristaps Porzingis",
            c: "Tim Hardaway Jr.",
            d: "Dorian Finney-Smith"
        },
        resposta: "b"
    }
];

var numeroPerguntaJogador = 0; // Índice da pergunta atual
var pontuacao_jogador = 0; // Pontuação do usuário

var questionElementJogador = document.getElementById("pergunta_jogador");
var optionAElementJogador = document.getElementById("optionATextJogador");
var optionBElementJogador = document.getElementById("optionBTextJogador");
var optionCElementJogador = document.getElementById("optionCTextJogador");
var optionDElementJogador = document.getElementById("optionDTextJogador");

function aparecerPerguntaJogador() {
    var perguntaAtualJogador = perguntas_jogador[numeroPerguntaJogador];
    questionElementJogador.textContent = perguntaAtualJogador.pergunta;

    var options = document.getElementsByName("choice");
    for (var i = 0; i < options.length; i++) {
        options[i].checked = false; // Limpar seleção anterior
    }

    optionAElementJogador.textContent = perguntaAtualJogador.options.a;
    optionBElementJogador.textContent = perguntaAtualJogador.options.b;
    optionCElementJogador.textContent = perguntaAtualJogador.options.c;
    optionDElementJogador.textContent = perguntaAtualJogador.options.d;
}

function verificarRespostaJogador() {
    var respostaSelecionada = document.querySelector("input[name='choice']:checked");
    if (!respostaSelecionada) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    var respostaEscolhida = respostaSelecionada.value;
    if (respostaEscolhida === perguntas_jogador[numeroPerguntaJogador].resposta) {
        pontuacao_jogador++;
    }

    respostaSelecionada.checked = false;
    numeroPerguntaJogador++;

    if (numeroPerguntaJogador === perguntas_jogador.length) {
        pergunta_jogador.innerHTML = ""
        showResultJogador();
    } else {
        aparecerPerguntaJogador();
    }
}

function showResultJogador() {
    resultado_jogador.innerHTML = `Quiz finalizado! Veja sua colocação no ranking <div id="btqf"><button onclick="finalizarQuiz2()" id="btvoltar">Voltar</button></div>
    `;
    document.getElementById("options_jogador").style.display = "none";
    document.getElementById("submit_jogador").style.display = "none";
}

document.getElementById("submit_jogador").addEventListener("click", verificarRespostaJogador);
aparecerPerguntaJogador();



