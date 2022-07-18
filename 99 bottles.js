var bottles = [];

function song(){
  for(var count = 100; count > 1; count--){
    bottles.push(count);
    console.log(count + ' bottles of beer on the wall ' + count + ' bottles of beer. Take 1 down, pass it around, ' + (count - 1) + ' bottles of beer on the wall');
  
  }
  
}