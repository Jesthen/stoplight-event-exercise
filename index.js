function stoplight(){
  //create elements
  let mouseIn = document.createElement("onmouseenter")
  let mouseOut = document.createElement("onmouseleave")

  //append
  document.body.append(mouseIn)
  document.body.append(mouseOut)

  //get elements
  let stopLight = document.getElementById('stopLight')
  let stopButton = document.getElementById('stopButton')
  let slowLight = document.getElementById('slowLight')
  let slowButton = document.getElementById('slowButton')
  let goLight = document.getElementById('goLight')
  let goButton = document.getElementById('goButton')
  let stopButtonMouseIn = document.getElementById('onmouseenter')
  let stopButtonMouseOut = document.getElementById('onmouseleave')
  let slowButtonMouseIn = document.getElementById('onmouseenter')
  let slowButtonMouseOut = document.getElementById('onmouseleave')
  let goButtonMouseIn = document.getElementById('onmouseenter')
  let goButtonMouseOut = document.getElementById('onmouseleave')

  goButton.addEventListener('onmouseenter', console.log('entered go button'))
  
  //event listener
  stopButton.addEventListener('click', stopButtonClick ) 
  slowButton.addEventListener('click', slowButtonClick ) 
  goButton.addEventListener('click', goButtonClick )
  stopButtonMouseIn.addEventListener('onmouseenter',stopButtonMouseInMouseenter)
  slowButtonMouseIn.addEventListener('onmouseenter',slowButtonMouseInMouseenter)
  goButtonMouseIn.addEventListener('onmouseenter',goButtonMouseInMouseenter)
  stopButtonMouseOut.addEventListener('onmouseleave', stopButtonMouseOutMouseleave)
  slowButtonMouseOut.addEventListener('onmouseleave', slowButtonMouseOutMouseleave)
  goButtonMouseOut.addEventListener('onmouseleave', goButtonMouseOutMouseleave) 

  
}
//button click 
function stopButtonClick (event){
  stopLight.style.background ='red'; 
  goLight.style.background = 'black';
  slowLight.style.background = 'black';
  console.log(event.target + ' was clicked')
  
}
function slowButtonClick (event){
  slowLight.style.background ='yellow'; 
  goLight.style.background = 'black';
  stopLight.style.background = 'black';
  console.log(event.target + ' was clicked')
  
}
function goButtonClick (event){
  goLight.style.background ='green';
  slowLight.style.background = 'black';
  stopLight.style.background = 'black';
  console.log(event.target + ' was clicked')
  
}
//mouse interactions
function stopButtonMouseInMouseenter(event){
  console.log(event.target + 'mouse entered')
}

function slowButtonMouseInMouseenter(event){
  console.log(event.target + 'mouse entered')
}

function goButtonMouseInMouseenter(event){
  console.log(event.target + 'mouse entered')
}  

stoplight(); //call function to test

  // YOUR CODE HERE
//})();
