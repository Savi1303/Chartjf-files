    // fetchblock
function updateChart() {

const  url = 'Finance.json';

  fetch(url)
      .then((response) => response.json())
      .then((result) => {
        
            const month = result.financialreport[0].financials.map(
              function(index) {
              return index.date;  
                  });
                  
            const value = result.financialreport[0].financials.map(
              function(index) {
              return index.revenue;  
                  });

              const name = result.financialreport.map(
              function(index) {
              return index.companyname;  
                  });
        
              myChart.config.data.labels = month;
              myChart.config.data.datasets[0].data = value;
              myChart.config.data.datasets[0].label = name;
              myChart.update() 
        })
}