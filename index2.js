const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var pecas = [];
var codigo = function () {

  if (pecas.length >= 10){
    console.log("");
    console.log("O limite da caixa foi atingido,insira outra caixa e recomece outro processo.");
    console.log("");
    rl.close();
    process.exit();
  
  }

   const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Qual é a capacidade da caixa ", function (capacidade) {
        if (capacidade >= 10){
            console.log("Caixa cheia");
            rl.close();
        }else  {
             console.log("Caixa com espaço");
             resolve()
        }
     }
     );
  })
}



const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Insira o peso da peça ", function (peso) {
        if (peso <= 100){
            console.log("Essa peça é muito leve");
            rl.close();
        }else  {
             console.log("Essa peça esta no peso ideal,prossiga.");
             console.log("");
             resolve()
        }
     }
     );
  })
}
const question3 = () => {
    return new Promise((resolve, reject) => {
      rl.question("Qual o nome da peça ", function (nome) {
          if (nome.length < 3){
              console.log("O nome da peça precisa ter mais de 3 caracteres")
              resolve()
          }else{
            console.log("Peça cadastrada com sucesso: " + nome);
            console.log("");
            pecas.push(nome);
            codigo();
          }
    ;   }
       );
    })
  }


const main = async () => {
  await question1()
  await question2()
  await question3()
  rl.close()
}


main()
}

codigo();