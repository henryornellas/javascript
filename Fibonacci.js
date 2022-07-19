var output = [];

function fibo(n){

  if(n == 1){
    output=[0];
  }else if(n == 2){
    output=[0, 1];
  }else{
    output = [0, 1];
    for(var i = 2; i<n; i++){
      var ultimo = parseInt(output.slice(-1));
      var penultimo = parseInt(output.slice(-2, -1));
      output.push(ultimo + penultimo);
    }
  }
  
  console.log(output);
  }