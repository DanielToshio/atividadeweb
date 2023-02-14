const readline = require('readline');
const teclado = readline.createInterface({

input: process.stdin,

output: process.stdout

});

teclado.question("Quantidade de produtos: ", (qtd) =>  {
    teclado.question('Valor do produto: ',(valor)=>{
        teclado.question('Digite o valor do desconto: ',(desconto)=>{


            let resultado = (parseInt(qtd) * parseInt(valor))-parseInt(desconto);
            
    console.log(" Valor final: R$" + resultado);
    
    teclado.close();
    
    })
})
});