var ano = prompt('digite um ano');

ano = parseInt(ano);

if(ano%4 === 0){
  if(ano%100 == 0){
    if(ano%400 == 0){
      alert('é');
    }else{
      alert('não é');
    }
  }else{
    alert('é');
  }
}else{
  alert('não é');
}