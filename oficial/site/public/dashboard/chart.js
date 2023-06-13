const ctx = document.getElementById('myChart');

 const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Pontos',
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
const ctxp = document.getElementById('myChartp');
const data = {
    labels: [
      'Red',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 4
    }]
  };
new Chart(ctxp, {
    type: 'doughnut',
    data: data,
  });
