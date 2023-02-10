const url = 'Temperature.json';

const chartReq = {
  method: 'GET'
}

fetch(url, chartReq, true)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        
            const months = result.months_temperature.map(
              function(elem) {
              return elem.date;  
                  });
                  // console.log(months)
                  
            const value = result.months_temperature.map(
              function(elem) {
              return elem.high;  
                  });
                  // console.log(value)

              const value2 = result.months_temperature.map(
              function(elem) {
              return elem.low;  
                  });
                  // console.log(value2)



let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'High Temperature F',
            data: value,
            backgroundColor: 'transparent',
            borderColor: 'green',
            borderWidth: 3
        },
        {
              label: 'Low Temperature F',
              data: value2,
              backgroundColor: 'transparent',
              borderColor: 'red',
              borderWidth: 2
          }
      ]
    },
    options: {
      elements : {
        line :  {
          tension : 0
        }
      },  
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
})
