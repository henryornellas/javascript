function tempoVida (){

  var idade = prompt('quantos anos vc tem?');

  var dias = Math.floor(32850 - idade*365);
  var semanas = Math.floor(dias/7);
  var meses = Math.floor(dias/30);

  alert('vc tem ' + dias + ' dias, ' + semanas + ' semanas, e ' + meses + ' meses restantes.');

}

tempoVida();
