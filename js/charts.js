let myChart = document.getElementById('myChart').getContext('2d');
//GLOBAL OPTIONMS
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';
let massPopChart = new Chart(myChart, {
    type: 'radar', //bar,horizontal,pie,line,doughnut,radar,polarArea
    data: {
        labels: ['Claypole', 'Avellaneda', 'Barracas', 'Adrogue', 'La boca', 'Puerto Madero'],
        datasets: [{
            label: 'Population',
            data: [
                48534,
                32784,
                23848,
                12347,
                18238,
                3826
            ],
            backgroundColor: [
                'green',
                'red',
                'blue',
                'black',
                'yellow',
                'orange'
            ],
            borderWidth: 1,
            borderColor: 'gray',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title:{
            display:true,
            text:'Poblacion Buenos Aires',
            fontSize:25
        },
        legend:{
            display:true,
            position:'right',
            labels:{
                fontColor:'red'
            }
        },
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
        },
        tooltips:{
            enabled:true
        }
    }
});