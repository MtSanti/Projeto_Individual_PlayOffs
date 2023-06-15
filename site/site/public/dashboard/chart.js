const ctx = document.getElementById('myChartp');

 const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Pontos - Quiz Geral',
        data: [],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
const ctxp = document.getElementById('myChart');
const graficop = new Chart(ctxp, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Pontos - Quiz Jogador',
      data: [],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
