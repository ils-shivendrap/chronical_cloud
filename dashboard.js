Chart.register(ChartDataLabels);
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




const pieChart = document.getElementById('pieChart');

//pie chart
var pieXValues = ["Multimedia", "Audio Notes", "Notes","Free Space"];
var pieYValues = [ 85, 115, 55, 245];
var barColors = ["#286BCB", "#7DB0F7", "#CCCCCC", "#386CB5"];

//custom data labels plugin block


new Chart("pieChart", {
  type: "pie",
  data: {
    labels: pieXValues,
    datasets: [{
      backgroundColor: barColors,
      data: pieYValues,
      borderWidth: 6
    }]
  },
  options: {
    rotation: 45,
    plugins: {
      
      labels:{
        render: (ctx)=>{
          return ctx.value + " mb ";
        },
        position:"outside",
        fontColor: barColors

      },
      datalabels:{
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = (value*100 / sum).toFixed(0)+"%";
          return percentage;
        },
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          },
        },
        color: "#FFFFFF"
      },
      legend: {
        display: true,
        position: 'left',
        align: 'end',
        labels: {
            usePointStyle	: true,
            pointStyle: "circle",
            fontColor: '#333',
            boxWidth: 10,
            boxHeight: 10,
            borderRadius: "50",
        }
    },
      title: {
        display: false,
        beginAtZero: true,
      },
      type: 'linear'
    },
    responsive: true,
    aspectRatio: 2
  },
});






let link = document.getElementsByClassName("side-box-items");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}




//open sidebar menu
let sideBarOpen = document.getElementById("bars");
sideBarOpen.addEventListener("click", ()=>{
 
    let nav = document.getElementsByClassName("side-nav-main-div")[0];
    if (sideBarOpen.getAttribute("aria-expanded") === "false"){
      console.log("saaasa")
        nav.style.left = 0;
        sideBarOpen.setAttribute("aria-expanded", "true")
    }
  
})


let sideBarClose = document.getElementById("close-btn");
sideBarClose.addEventListener("click", ()=>{
 
    let nav = document.getElementsByClassName("side-nav-main-div")[0];
    if (sideBarOpen.getAttribute("aria-expanded") === "true"){
      // console.log("saaasa")
        nav.style.left = "-260px";
        sideBarOpen.setAttribute("aria-expanded", "false")
    }
  
})

let dropdown = document.getElementById("dropdownBtn");
dropdown.addEventListener("click", ()=>{
 
    let drop = document.getElementsByClassName("user-dropdown")[0];
    if (dropdown.getAttribute("aria-expanded") === "true"){
      console.log("saaasa")
        drop.style.display = "none";
        dropdown.setAttribute("aria-expanded", "false")
    }
    else{
      drop.style.display = "block";
      dropdown.setAttribute("aria-expanded", "true")

    }
  
})














  
  
  
