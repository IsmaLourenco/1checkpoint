let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;
let menu = '';

function tempo(pipoca, macarrao, carne, feijao, brigadeiro, menu){

  if (
    pipoca > 20 && pipoca < 30 || 
    macarrao > 16 && macarrao <24 || 
    carne > 30 && carne < 45 || 
    feijao > 24 && feijao < 36 || 
    brigadeiro > 16 && brigadeiro < 24
    ){
    console.log("A comida queimou.");

  } else if (
    pipoca < 10 || 
    macarrao < 8 || 
    carne < 15 || 
    feijao < 12 || 
    brigadeiro < 8
    ){
    console.log("Tempo insuficiente.");

  } else if (
    pipoca > 30 || 
    macarrao > 24 || 
    carne > 45 || 
    feijao > 36 || 
    brigadeiro > 24
    ){
    console.log("Kabumm!");
  
  } else if (
    menu != ''
    ){
    console.log("Prato inexistente.")
   
  } else {
    console.log("Prato pronto, bom apetite!!!");
  }

}

tempo(pipoca = 21); 
tempo(macarrao = 17);
tempo(carne = 15);
tempo(feijao = 220);
tempo(brigadeiro = 150);
tempo(menu = 3);