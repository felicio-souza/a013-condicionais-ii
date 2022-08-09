//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

//reescrevendo codigo

const nome = "José";
const idade = 13;


if(nome === "José"){

	console.log("Oi, Zé!");

	console.log(idade >= 18? "pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista");

}else{
	console.log("Olá, "+nome);
}