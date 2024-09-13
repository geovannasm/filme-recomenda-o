let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("orange");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(255, 0, 0));
  textAlign(CENTER, CENTER);
  textSize(45);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 12) {
    if (idade >= 14) {
      return "Homem aranha:longe de casa";
    } else {
      if (idade >= 16) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "John Wick";          
        } else{
         return "Esquadrão suicida";
        }
      } else {
        if (gostaDeFantasia) {
          return "Hellboy";
        } else {
          return "Van Helsing";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Os irmãos Grimm";
    } else {
      return "Anjos da Noite";
    }
  }
}
