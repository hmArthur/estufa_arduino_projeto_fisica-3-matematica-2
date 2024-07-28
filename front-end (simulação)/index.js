const umd  = document.querySelector('.umd');
const temp  = document.querySelector('.temp');
const gas  = document.querySelector('.gas');


let umda = [];
let tempa = [];
let gasa = [];


let stop = true;  

let stop1 = true; 

let stop2 = true;   
function dados() {
    
    //https://dummyjson.com/c/489d-a754-40b6-864b para simular
    fetch('https://dummyjson.com/c/489d-a754-40b6-864b')
    .then(response => response.json())
    .then(data => {
       
      
        const dataumd = data.umidade.slice(2)
        const datatemp = data.temperatura.slice(2)
        const datagas = data.gas.slice(2)

        umda.push(dataumd*-1)
        tempa.push(datatemp)
        gasa.push(datagas)
        

       
        umdchar = document.querySelector('#myChartumd');
        tempchar = document.querySelector('#myCharttemp');
        gaschar = document.querySelector('#myChartgas');
        
        
        
        umd.innerHTML = "valor: "+dataumd
        temp.innerHTML = data.temperatura.slice(2) + "°C"
        gas.innerHTML = data.gas.slice(2)


        if(umda && stop) {
            Plotly.newPlot( umdchar, [{
                y: [-1024, umda[0]] }], {
                margin: { t: 0 } } );
            
               stop = false
            
        }

        if(temp && stop1) {
            Plotly.newPlot( tempchar, [{
                y: [0, tempa[0]] }], {
                margin: { t: 0 } } );
            
               stop1 = false
            
        }
        if(gas && stop2) {
            Plotly.newPlot( gaschar, [{
                y: [0, gasa[0]] }], {
                margin: { t: 0 } } );
            
               stop2 = false
            
        }

        if(umda.length >=5) {
            Plotly.extendTraces(umdchar, {
                y: [umda]
              }, [0])
            umda.shift()
            
        }

        if(tempa.length >=5) {
            Plotly.extendTraces(tempchar, {
                y: [tempa]
              }, [0])
            tempa.shift()
            
        }
        if(gasa.length >=5) {
            Plotly.extendTraces(gaschar, {
                y: [gasa]
              }, [0])
            gasa.shift()
            
        }
      

    }
        
    )
    
    
   
}
setInterval(dados, 1000)

const button1 = document.querySelector(".botao1")

button1.addEventListener('click', function(event) {
    fetch('http://localhost:5000/D')
    .then(response => response.json())
    .then(data => {

    }).catch(error => {
        // trate erros de requisição
        console.log(error)
      });
  });

const button2 = document.querySelector(".botao2")

button2.addEventListener('click', function(event) {
      fetch('http://localhost:5000/A')
      .then(response => response.json())
      .then(data => {
  
      }).catch(error => {
          // trate erros de requisição
          console.log(error)
        });
    });

const button3 = document.querySelector(".botao3")

button3.addEventListener('click', function(event) {
      fetch('http://localhost:5000/E')
      .then(response => response.json())
      .then(data => {
  
      }).catch(error => {
          // trate erros de requisição
          console.log(error)
        });
    });

const button4 = document.querySelector(".botao4")

button4.addEventListener('click', function(event) {
      fetch('http://localhost:5000/B')
      .then(response => response.json())
      .then(data => {
  
      }).catch(error => {
          // trate erros de requisição
          console.log(error)
        });
    });

    const button5 = document.querySelector(".botao5")

button5.addEventListener('click', function(event) {
      fetch('http://localhost:5000/F')
      .then(response => response.json())
      .then(data => {
  
      }).catch(error => {
          // trate erros de requisição
          console.log(error)
        });
    });

    const button6 = document.querySelector(".botao6")

button6.addEventListener('click', function(event) {
      fetch('http://localhost:5000/C')
      .then(response => response.json())
      .then(data => {
  
      }).catch(error => {
          // trate erros de requisição
          console.log(error)
        });
    });



