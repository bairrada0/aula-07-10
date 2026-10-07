let idade = 16;

if (idade >= 18) {
     console.log(" maior de idade ");
} else {
    console.log(" menor de idade ");
}



let pontos = 500;
let anos_cliente = 2;

if ( pontos <= 99 ) {
    console.log(" cliente bronze ")
} else if ( pontos <= 100 && pontos <= 499){
    console.log(" cliente prata ")
} else if ( pontos <= 500 && pontos <= 999){
    console.log(" cliente ouro ")
} else if ( pontos <= 1000 && anos_cliente > 1){
    console.log(" cliente diamante ")
}