const barChart = document.getElementById('barChart');

//Bar graph JS
var xValues = ["School_Name_01", "School_Name_02", "School_Name_03", "School_Name_04"];
  
new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    
    datasets: [{
      label: "Active",
      backgroundColor: "#F9AC32",
      data: [150, 200, 350, 250],
      barThickness:20
    },{
        label:"Inactive",
        backgroundColor: "#EEEEEE",
        data: [200, 250, 100, 50],
        barThickness:20
    }]
  },
  options: {
    plugins: {
      datalabels:{
        display: false
      },
      legend: {
        display: true,
        position: 'right',
        align: 'start',
        labels: {
            usePointStyle	: true,
            pointStyle: "circle",
            fontColor: '#444B48',
            boxWidth: 6,
            boxHeight: 6,
            borderRadius: "50",
        },
        
    },
      title: {
        display: false,
      },
    },
    
    scales: {
      x:  {
        stacked:true,
        grid: {
          display: false
        },
    
      },
      xAxes: [{
        ticks: {
            fontSize: 600
        }
    }],
  
      y: {
        stacked:true,
        grid:{
          drawBorder: false
        },
        min: 0,
        max: 400,
        ticks: {
          // forces step size to be 50 units
          stepSize: 100
        }
      },
    },
    responsive: true,
    aspectRatio: 2
  },
});