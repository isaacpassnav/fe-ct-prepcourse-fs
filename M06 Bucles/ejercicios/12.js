function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
}

var fiz= "fizz";
var buz= "buzz";
var fizbuz="fizzbuzz";

for( var i=0; i==num; i++){
  if([i]%3){ // variable que guarde el resultado de %3 para trabajar 
    var resultado1 = console.log(fiz);
  } else if([i]%5){   // variable que guarde el resultado de %5 para trabajar
      var resultado2 = console.log(buz);
  }else if([i] == resultado1 && resultado2){
    console.log(fizbuz);
  }else{
    return false
  }
  
}



module.exports = fizzBuzz;
