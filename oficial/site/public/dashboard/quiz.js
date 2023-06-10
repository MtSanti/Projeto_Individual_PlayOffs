 // Array de perguntas e respostas
 var questions = [
    {
      question: "Qual equipe possui o maior número de títulos da NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Boston Celtics",
        c: "Chicago Bulls",
        d: "Golden State Warriors"
      },
      answer: "b"
    },
    {
      question: "Qual jogador possui o recorde de pontos em um único jogo de playoffs?",
      options: {
        a: "LeBron James",
        b: "Kobe Bryant",
        c: "Michael Jordan",
        d: "Wilt Chamberlain"
      },
      answer: "d"
    },
    {
      question: "Qual equipe foi a primeira a conquistar três títulos consecutivos na NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Chicago Bulls",
        c: "Boston Celtics",
        d: "San Antonio Spurs"
      },
      answer: "c"
    },
    {
      question: "Qual jogador detém o recorde de mais pontos em uma única temporada de playoffs?",
      options: {
        a: "Michael Jordan",
        b: "LeBron James",
        c: "Kareem Abdul-Jabbar",
        d: "Wilt Chamberlain"
      },
      answer: "c"
    },
    {
      question: "Qual equipe venceu o maior número de títulos consecutivos na história dos playoffs da NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Boston Celtics",
        c: "Chicago Bulls",
        d: "Golden State Warriors"
      },
      answer: "b"
    },
    {
      question: "Qual jogador detém o recorde de mais triplos-duplos na história dos playoffs?",
      options: {
        a: "Magic Johnson",
        b: "LeBron James",
        c: "Larry Bird",
        d: "Russell Westbrook"
      },
      answer: "b"
    },
    {
      question: "Qual foi a maior virada de uma equipe em uma série de playoffs?",
      options: {
        a: "Los Angeles Clippers (contra o Golden State Warriors, 2019)",
        b: "Cleveland Cavaliers (contra o Golden State Warriors, 2016)",
        c: "Denver Nuggets (contra o Utah Jazz, 2020)",
        d: "Houston Rockets (contra o Phoenix Suns, 1994)"
      },
      answer: "c"
    },
    {
      question: "Qual jogador marcou o maior número de pontos em uma única partida de playoffs?",
      options: {
        a: "Kobe Bryant",
        b: "Michael Jordan",
        c: "Elgin Baylor",
        d: "Devin Booker"
      },
      answer: "d"
    },
    {
      question: "Qual equipe possui o maior número de participações consecutivas nas finais da NBA?",
      options: {
        a: "Los Angeles Lakers",
        b: "Boston Celtics",
        c: "Miami Heat",
        d: "San Antonio Spurs"
      },
      answer: "a"
    },
    {
      question: "Qual foi o primeiro time a vencer um título da NBA através de um arremesso de três pontos?",
      options: {
        a: "Boston Celtics",
        b: "Los Angeles Lakers",
        c: "Chicago Bulls",
        d: "Houston Rockets"
      },
      answer: "d"
    }
  
  ];

  var currentQuestion = 0; // Índice da pergunta atual
  var score = 0; // Pontuação do usuário

  var questionElement = document.getElementById("question");
  var optionAElement = document.getElementById("optionAText");
  var optionBElement = document.getElementById("optionBText");
  var optionCElement = document.getElementById("optionCText");
  var optionDElement = document.getElementById("optionDText");

  function showQuestion() {
    var question = questions[currentQuestion];
    questionElement.textContent = question.question;

    var options = document.getElementsByName("choice");
    for (var i = 0; i < options.length; i++) {
      options[i].checked = false; // Limpar seleção anterior
    }

    optionAElement.textContent = question.options.a;
    optionBElement.textContent = question.options.b;
    optionCElement.textContent = question.options.c;
    optionDElement.textContent = question.options.d;
  }

  function checkAnswer() {
    var selectedOption = document.querySelector("input[name='choice']:checked");
    if (!selectedOption) {
      alert("Por favor, selecione uma opção.");
      return;
    }

    var answer = selectedOption.value;
    if (answer === questions[currentQuestion].answer) {
      score++;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion === questions.length) {
      question.innerHTML = ""
      showResult();
    } else {
      showQuestion();
    }
  }

  function showResult() {
    result.innerHTML = `Quiz finalizado! Veja sua colocação no ranking <div id="btqf"><button onclick="finalizarQuiz()" id="btvoltar">Voltar</button></div>
    `;
    document.getElementById("options").style.display = "none";
    document.getElementById("submit").style.display = "none";
  }

  document.getElementById("submit").addEventListener("click", checkAnswer);
  showQuestion();




//  // Array de perguntas e respostas
//  var questions = [
//     {
//       question: "Qual equipe possui o maior número de títulos da NBA?",
//       options: {
//         a: "Los Angeles Lakers",
//         b: "Boston Celtics",
//         c: "Chicago Bulls",
//         d: "Golden State Warriors"
//       },
//       answer: "b"
//     },
//     {
//       question: "Qual jogador possui o recorde de pontos em um único jogo de playoffs?",
//       options: {
//         a: "LeBron James",
//         b: "Kobe Bryant",
//         c: "Michael Jordan",
//         d: "Wilt Chamberlain"
//       },
//       answer: "d"
//     },
//     {
//       question: "Qual equipe foi a primeira a conquistar três títulos consecutivos na NBA?",
//       options: {
//         a: "Los Angeles Lakers",
//         b: "Chicago Bulls",
//         c: "Boston Celtics",
//         d: "San Antonio Spurs"
//       },
//       answer: "c"
//     },
//     {
//       question: "Qual jogador detém o recorde de mais pontos em uma única temporada de playoffs?",
//       options: {
//         a: "Michael Jordan",
//         b: "LeBron James",
//         c: "Kareem Abdul-Jabbar",
//         d: "Wilt Chamberlain"
//       },
//       answer: "c"
//     },
//     {
//       question: "Qual equipe venceu o maior número de títulos consecutivos na história dos playoffs da NBA?",
//       options: {
//         a: "Los Angeles Lakers",
//         b: "Boston Celtics",
//         c: "Chicago Bulls",
//         d: "Golden State Warriors"
//       },
//       answer: "b"
//     },
//     {
//       question: "Qual jogador detém o recorde de mais triplos-duplos na história dos playoffs?",
//       options: {
//         a: "Magic Johnson",
//         b: "LeBron James",
//         c: "Larry Bird",
//         d: "Russell Westbrook"
//       },
//       answer: "b"
//     },
//     {
//       question: "Qual foi a maior virada de uma equipe em uma série de playoffs?",
//       options: {
//         a: "Los Angeles Clippers (contra o Golden State Warriors, 2019)",
//         b: "Cleveland Cavaliers (contra o Golden State Warriors, 2016)",
//         c: "Denver Nuggets (contra o Utah Jazz, 2020)",
//         d: "Houston Rockets (contra o Phoenix Suns, 1994)"
//       },
//       answer: "c"
//     },
//     {
//       question: "Qual jogador marcou o maior número de pontos em uma única partida de playoffs?",
//       options: {
//         a: "Kobe Bryant",
//         b: "Michael Jordan",
//         c: "Elgin Baylor",
//         d: "Devin Booker"
//       },
//       answer: "d"
//     },
//     {
//       question: "Qual equipe possui o maior número de participações consecutivas nas finais da NBA?",
//       options: {
//         a: "Los Angeles Lakers",
//         b: "Boston Celtics",
//         c: "Miami Heat",
//         d: "San Antonio Spurs"
//       },
//       answer: "a"
//     },
//     {
//       question: "Qual foi o primeiro time a vencer um título da NBA através de um arremesso de três pontos?",
//       options: {
//         a: "Boston Celtics",
//         b: "Los Angeles Lakers",
//         c: "Chicago Bulls",
//         d: "Houston Rockets"
//       },
//       answer: "d"
//     }
  
//   ];

//   var currentQuestion = 0; // Índice da pergunta atual
//   var score = 0; // Pontuação do usuário

//   var questionElement = document.getElementById("question");
//   var optionAElement = document.getElementById("optionAText");
//   var optionBElement = document.getElementById("optionBText");
//   var optionCElement = document.getElementById("optionCText");
//   var optionDElement = document.getElementById("optionDText");

//   function showQuestion() {
//     var question = questions[currentQuestion];
//     questionElement.textContent = question.question;

//     var options = document.getElementsByName("choice");
//     for (var i = 0; i < options.length; i++) {
//       options[i].checked = false; // Limpar seleção anterior
//     }

//     optionAElement.textContent = question.options.a;
//     optionBElement.textContent = question.options.b;
//     optionCElement.textContent = question.options.c;
//     optionDElement.textContent = question.options.d;
//   }

//   function checkAnswer() {
//     var selectedOption = document.querySelector("input[name='choice']:checked");
//     if (!selectedOption) {
//       alert("Por favor, selecione uma opção.");
//       return;
//     }

//     var answer = selectedOption.value;
//     if (answer === questions[currentQuestion].answer) {
//       score++;
//     }

//     selectedOption.checked = false;
//     currentQuestion++;

//     if (currentQuestion === questions.length) {
//       question.innerHTML = ""
//       showResult();
//     } else {
//       showQuestion();
//     }
//   }

//   function showResult() {
//     result.innerHTML = `Quiz finalizado! Veja sua colocação no ranking <div><button onclick="finalizarQuiz2()" id="btvoltar">Voltar</button></div>
//     `;
//     document.getElementById("options").style.display = "none";
//     document.getElementById("submit").style.display = "none";
//   }

//   document.getElementById("submit").addEventListener("click", checkAnswer);
//   showQuestion();
