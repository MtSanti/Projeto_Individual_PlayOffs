 // Lista de perguntas
 var perguntas = [
    {
      pergunta: "Qual equipe possui o maior número de títulos da NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Boston Celtics",
        c: "Chicago Bulls",
        d: "Golden State Warriors"
      },
      resposta: "b"
    },
    {
      pergunta: "Qual jogador possui o recorde de pontos em um único jogo de playoffs?",
      options: {
        a: "LeBron James",
        b: "Kobe Bryant",
        c: "Michael Jordan",
        d: "Wilt Chamberlain"
      },
      resposta: "d"
    },
    {
      pergunta: "Qual equipe foi a primeira a conquistar três títulos consecutivos na NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Chicago Bulls",
        c: "Boston Celtics",
        d: "San Antonio Spurs"
      },
      resposta: "c"
    },
    {
      pergunta: "Qual jogador detém o recorde de mais pontos em uma única temporada de playoffs?",
      options: {
        a: "Michael Jordan",
        b: "LeBron James",
        c: "Kareem Abdul-Jabbar",
        d: "Wilt Chamberlain"
      },
      resposta: "c"
    },
    {
      pergunta: "Qual equipe venceu o maior número de títulos consecutivos na história dos playoffs da NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Boston Celtics",
        c: "Chicago Bulls",
        d: "Golden State Warriors"
      },
      resposta: "b"
    },
    {
      pergunta: "Qual jogador detém o recorde de mais triplos-duplos na história dos playoffs?",
      options: {
        a: "Magic Johnson",
        b: "LeBron James",
        c: "Larry Bird",
        d: "Russell Westbrook"
      },
      resposta: "b"
    },
    {
      pergunta: "Qual foi a maior virada de uma equipe em uma série de playoffs?",
      options: {
        a: "Los Angeles Clippers (contra o Golden State Warriors, 2019)",
        b: "Cleveland Cavaliers (contra o Golden State Warriors, 2016)",
        c: "Denver Nuggets (contra o Utah Jazz, 2020)",
        d: "Houston Rockets (contra o Phoenix Suns, 1994)"
      },
      resposta: "c"
    },
    {
      pergunta: "Qual jogador marcou o maior número de pontos em uma única partida de playoffs?",
      options: {
        a: "Kobe Bryant",
        b: "Michael Jordan",
        c: "Elgin Baylor",
        d: "Devin Booker"
      },
      resposta: "d"
    },
    {
      pergunta: "Qual equipe possui o maior número de participações consecutivas nas finais da NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Boston Celtics",
        c: "Miami Heat",
        d: "San Antonio Spurs"
      },
      resposta: "a"
    },
    {
      pergunta: "Qual foi o primeiro time a vencer um título da NBA através de um arremesso de três pontos?",
      options: {
        a: "Boston Celtics",
        b: "Los Angeles Lakers",
        c: "Chicago Bulls",
        d: "Houston Rockets"
      },
      resposta: "d"
    }
  
  ];

  var numeroPergunta = 0; // Índice da pergunta atual
  var pontuacao = 0; // Pontuação do usuário

  var questionElement = document.getElementById("pergunta");
  var optionAElement = document.getElementById("optionAText");
  var optionBElement = document.getElementById("optionBText");
  var optionCElement = document.getElementById("optionCText");
  var optionDElement = document.getElementById("optionDText");

  function aparecerPergunta() {
    var perguntaAtual = perguntas[numeroPergunta];
    questionElement.textContent = perguntaAtual.pergunta;

    var options = document.getElementsByName("choice");
    for (var i = 0; i < options.length; i++) {
      options[i].checked = false; // Limpar seleção anterior
    }

    optionAElement.textContent = perguntaAtual.options.a;
    optionBElement.textContent = perguntaAtual.options.b;
    optionCElement.textContent = perguntaAtual.options.c;
    optionDElement.textContent = perguntaAtual.options.d;
  }

  function verificarResposta() {
    var respostaSelecionada = document.querySelector("input[name='choice']:checked");
    if (!respostaSelecionada) {
      alert("Por favor, selecione uma opção.");
      return;
    }

    var respostaEscolhida = respostaSelecionada.value;
    if (respostaEscolhida === perguntas[numeroPergunta].resposta) {
      pontuacao++;
    }

    respostaSelecionada.checked = false;
    numeroPergunta++;

    if (numeroPergunta === perguntas.length) {
      pergunta.innerHTML = ""
      showResult();
    } else {
      aparecerPergunta();
    }
  }

  function showResult() {
    result.innerHTML = `Quiz finalizado! Veja sua colocação no ranking <div id="btqf"><button onclick="finalizarQuiz()" id="btvoltar">Voltar</button></div>
    `;
    document.getElementById("options").style.display = "none";
    document.getElementById("submit").style.display = "none";
  }

  document.getElementById("submit").addEventListener("click", verificarResposta);
  aparecerPergunta();



