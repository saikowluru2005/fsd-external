
async function weather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=hyderabad&appid=24656f870ca2dbdaa21181709570f687');
    const data = await response.json();
    // console.log(data)
const x=[]
const y=[]
for (let i = 0; i < data.list.length; i++) {
    x.push(data.list[i].main.temp)
    y.push(data.list[i].dt)

}
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: y,
      datasets: [{
        label: 'Temperature',
        data: x,
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


}

// weather();