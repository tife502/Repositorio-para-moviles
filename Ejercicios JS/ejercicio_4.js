//1
for (let i = 7; i < 100; i++){
    console.log(i)
}

//2
let contador = -4;
while (contador < 102) {
  console.log(contador);
  contador++;
}

//3
let x = prompt("inserte un numero mayor a 100: ")
do {
    console.log("numero: " + x)
    x--;
}while(x >= 100)