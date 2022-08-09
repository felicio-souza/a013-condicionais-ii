const num = prompt("Digite um numero:")


if(num % 2 === 0 && num % 3 === 0){

        console.log("Este numero é divisivel por 2 e 3")

 } else if(num % 2 === 0){

        console.log("Este numero é divisivel por 2")

}  else if(num % 3 === 0){

        console.log("Este numero é divisivel por 3")
}     
   else{
        console.log("Numero não divisivel")
   } 


