const readline = require('readline');
const teclado = readline.createInterface({

input: process.stdin,

output: process.stdout

});

teclado.question("Digite o tamanho da base: ", (base) =>  {
    teclado.question("Digite o tamanho da altura: ",(altura)=>{
        let resultado = parseInt(base) * parseInt(altura);

        if(base==altura){
            console.log(" É um quadrado com: "+ resultado + "cm²");
        }else
        console.log(" É um retangulo com: "+ resultado+ "cm²");

        teclado.close();

    })
});