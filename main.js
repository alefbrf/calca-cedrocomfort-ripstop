let cor1 = document.querySelector('#cor1').value;
let cor2 = document.querySelector('#cor2').value;
let cor3 = document.querySelector('#cor3').value;
let cor4 = document.querySelector('#cor4').value;
let cor5 = document.querySelector('#cor5').value;
let cor6 = document.querySelector('#cor6').value;
let cor7 = document.querySelector('#cor7').value;
let cor8 = document.querySelector('#cor8').value;
let cor9 = document.querySelector('#cor9').value;
let cor10 = document.querySelector('#cor10').value;
let cor11 = document.querySelector('#cor11').value;


//PARTES
  //base
  const btnbase = document.getElementById('base');
  btnbase.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "visible";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  document.getElementById('cor1').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor1);
      document.getElementById('CB').style.backgroundColor = cor1;
  });
  document.getElementById('cor2').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor2);
      document.getElementById('CB').style.backgroundColor = cor2;
  });
  document.getElementById('cor3').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor3);
      document.getElementById('CB').style.backgroundColor = cor3;
  });
  document.getElementById('cor4').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor4);
      document.getElementById('CB').style.backgroundColor = cor4;
  });
  document.getElementById('cor5').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor5);
      document.getElementById('CB').style.backgroundColor = cor5;
  });
  document.getElementById('cor6').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor6);
      document.getElementById('CB').style.backgroundColor = cor6;
  });
  document.getElementById('cor7').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor7);
      document.getElementById('CB').style.backgroundColor = cor7;
  });
  document.getElementById('cor8').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor8);
      document.getElementById('CB').style.backgroundColor = cor8;
  });
  document.getElementById('cor9').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor9);
      document.getElementById('CB').style.backgroundColor = cor9;
  });
  document.getElementById('cor10').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor10);
      document.getElementById('CB').style.backgroundColor = cor10;
  });
  document.getElementById('cor11').addEventListener('click', function (e) {
      document.querySelectorAll(".corbase").forEach(v => v.style.fill = cor11);
      document.getElementById('CB').style.backgroundColor = cor11;
  });

  

  //botoes
  const btnbotoes = document.getElementById('botoes');
  btnbotoes.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel1').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "visible";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "visible";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "visible";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //botoes branco
  const btncorbotoespreto = document.getElementById('whitebase1');
  btncorbotoespreto.addEventListener('click', function(e){
    document.querySelector('.frente5').style.display = "none";
    document.querySelector('.costas5').style.display = "none";
    document.querySelector('.frente6').style.display = "none";
    document.querySelector('.costas6').style.display = "none";
    document.querySelector('.frente7').style.display = "none";
    document.querySelector('.costas7').style.display = "none";
    document.querySelector('.frente8').style.display = "none";
    document.querySelector('.costas8').style.display = "none";
    document.getElementById("BT").style.background = "#FFFFFF";
  });


  //botoes preta
    const bntcorbotoesbranco = document.getElementById('blackbase1');
  bntcorbotoesbranco.addEventListener('click', function(e){
    document.querySelector('.frente5').style.display = "block";
    document.querySelector('.costas5').style.display = "block";
    document.querySelector('.frente6').style.display = "none";
    document.querySelector('.costas6').style.display = "none";
    document.querySelector('.frente7').style.display = "none";
    document.querySelector('.costas7').style.display = "none";
    document.querySelector('.frente8').style.display = "none";
    document.querySelector('.costas8').style.display = "none";
    document.getElementById("BT").style.background = "#9FD235";
  });
  //botoes azul
  const btncorbotoesazul = document.getElementById('bluebase1');
  btncorbotoesazul.addEventListener('click', function(e){
    document.querySelector('.frente5').style.display = "none";
    document.querySelector('.costas5').style.display = "none";
    document.querySelector('.frente6').style.display = "block";
    document.querySelector('.costas6').style.display = "block";
    document.querySelector('.frente7').style.display = "none";
    document.querySelector('.costas7').style.display = "none";
    document.querySelector('.frente8').style.display = "none";
    document.querySelector('.costas8').style.display = "none";
    document.getElementById("BT").style.background = "#EA4C1E";
  });    
  //botoes vermelha
  const btncorbotoesvermelha = document.getElementById('redbase1');
  btncorbotoesvermelha.addEventListener('click', function(e){
    document.querySelector('.frente5').style.display = "none";
    document.querySelector('.costas5').style.display = "none";
    document.querySelector('.frente6').style.display = "none";
    document.querySelector('.costas6').style.display = "none";
    document.querySelector('.frente7').style.display = "block";
    document.querySelector('.costas7').style.display = "block";
    document.querySelector('.frente8').style.display = "none";
    document.querySelector('.costas8').style.display = "none";
    document.getElementById("BT").style.background = "#ADAEA8";
  });  
  //botoes amarela
  const btncorbotoesamarela = document.getElementById('yellowbase1');
  btncorbotoesamarela.addEventListener('click', function(e){
    document.querySelector('.frente5').style.display = "none";
    document.querySelector('.costas5').style.display = "none";
    document.querySelector('.frente6').style.display = "none";
    document.querySelector('.costas6').style.display = "none";
    document.querySelector('.frente7').style.display = "none";
    document.querySelector('.costas7').style.display = "none";
    document.querySelector('.frente8').style.display = "block";
    document.querySelector('.costas8').style.display = "block";
    document.getElementById("BT").style.background = "#ADAEA8";
  });  
  //botoes verde
  const btncorbotoesverde = document.getElementById('greenbase1');
  btncorbotoesverde.addEventListener('click', function(e){
    document.querySelector('.costas4').style.visibility = "hidden";
    document.querySelector('.frente5').style.visibility = "hidden";
    document.querySelector('.frente6').style.visibility = "hidden";
    document.querySelector('.costas5').style.visibility = "hidden";
    document.querySelector('.costas6').style.visibility = "hidden";
    document.querySelector('.frente7').style.visibility = "hidden";
    document.querySelector('.costas7').style.visibility = "hidden";
    document.querySelector('.frente8').style.visibility = "hidden";
    document.querySelector('.costas8').style.visibility = "visible";
    document.querySelector('.frente9').style.visibility = "visible";
    document.querySelector('.costas9').style.visibility = "hidden";
    document.querySelector('.frente10').style.visibility = "hidden";
    document.querySelector('.costas10').style.visibility = "hidden";
    document.querySelector('.frente11').style.visibility = "hidden";
    document.getElementById("BT").style.background = "#EA4C1E";
  });  

  document.getElementById('greenbase12').addEventListener('click', function(e){
    document.querySelector('.costas4').style.visibility = "hidden";
    document.querySelector('.frente5').style.visibility = "hidden";
    document.querySelector('.frente6').style.visibility = "hidden";
    document.querySelector('.costas5').style.visibility = "hidden";
    document.querySelector('.costas6').style.visibility = "hidden";
    document.querySelector('.frente7').style.visibility = "hidden";
    document.querySelector('.costas7').style.visibility = "hidden";
    document.querySelector('.frente8').style.visibility = "hidden";
    document.querySelector('.costas8').style.visibility = "hidden";
    document.querySelector('.frente9').style.visibility = "hidden";
    document.querySelector('.costas9').style.visibility = "visible";
    document.querySelector('.frente10').style.visibility = "visible";
    document.querySelector('.costas10').style.visibility = "hidden";
    document.querySelector('.frente11').style.visibility = "hidden";
    document.getElementById("BT").style.background = "#9FD235";
  });
  document.getElementById('greenbase13').addEventListener('click', function(e){
    document.querySelector('.costas4').style.visibility = "hidden";
    document.querySelector('.frente5').style.visibility = "hidden";
    document.querySelector('.frente6').style.visibility = "hidden";
    document.querySelector('.costas5').style.visibility = "hidden";
    document.querySelector('.costas6').style.visibility = "hidden";
    document.querySelector('.frente7').style.visibility = "hidden";
    document.querySelector('.costas7').style.visibility = "hidden";
    document.querySelector('.frente8').style.visibility = "hidden";
    document.querySelector('.costas8').style.visibility = "hidden";
    document.querySelector('.frente9').style.visibility = "hidden";
    document.querySelector('.costas9').style.visibility = "hidden";
    document.querySelector('.frente10').style.visibility = "hidden";
    document.querySelector('.costas10').style.visibility = "visible";
    document.querySelector('.frente11').style.visibility = "visible";
    document.getElementById("BT").style.background = "#ADAEA8";
  });


  document.getElementById('gola1').addEventListener('click', function(e){
    document.querySelector('.frente3').style.display = "none";
    document.querySelector('.costas3').style.display = "none";
    document.querySelector('.frente2').style.display = "block";
    document.querySelector('.costas1').style.display = "block";
    document.querySelector('.frente4').style.display = "none";
    document.querySelector('.costas4').style.display = "none";
  });

  document.getElementById('gola2').addEventListener('click',function(e){
    document.querySelector('.frente3').style.display = "none";
    document.querySelector('.costas3').style.display = "none";
    document.querySelector('.frente2').style.display = "none";
    document.querySelector('.costas1').style.display = "none";
    document.querySelector('.frente4').style.display = "block";
    document.querySelector('.costas4').style.display = "block";
  });
  
  document.getElementById('punho').addEventListener('click',function(e){
    document.querySelector('.frente3').style.display = "block";
    document.querySelector('.costas3').style.display = "block";
    document.querySelector('.frente2').style.display = "none";
    document.querySelector('.costas1').style.display = "none";
    document.querySelector('.frente4').style.display = "none";
    document.querySelector('.costas4').style.display = "none";
  });

   


   //vistaE
   const btnvistaE = document.getElementById('vista');
  btnvistaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      console.log("manga");
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "visible";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "visible";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "visible";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //vistaE branco
  const bntcorvistaEbranco = document.getElementById('whitebase5');
  bntcorvistaEbranco.addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "none";
    document.querySelector('.frente13').style.display = "none";
    document.querySelector('.costas13').style.display = "none";
    document.querySelector('.costas14').style.display = "none";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "none";
    document.querySelector('.frente17').style.display = "none";
    document.querySelector('.costas11').style.display = "none";
    document.querySelector('.costas12').style.display = "none";
    document.querySelector('.costas15').style.display = "none";
  });

  //vistaE preta
  const btncorvistaEpreto = document.getElementById('blackbase5');
  btncorvistaEpreto.addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "block";
    document.querySelector('.frente13').style.display = "block";
    document.querySelector('.costas13').style.display = "block";
    document.querySelector('.costas14').style.display = "block";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "none";
    document.querySelector('.frente17').style.display = "none";
    document.querySelector('.costas11').style.display = "none";
    document.querySelector('.costas12').style.display = "none";
    document.querySelector('.costas15').style.display = "none";
  });
  //vistaE azul
  const btncorvistaEazul = document.getElementById('bluebase5');
  btncorvistaEazul.addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "block";
    document.querySelector('.frente13').style.display = "block";
    document.querySelector('.costas13').style.display = "none";
    document.querySelector('.costas14').style.display = "none";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "none";
    document.querySelector('.frente17').style.display = "none";
    document.querySelector('.costas11').style.display = "none";
    document.querySelector('.costas12').style.display = "none";
    document.querySelector('.costas15').style.display = "block";
  });    
  //vistaE vermelha
  const btncorvistaEvermelha = document.getElementById('redbase5');
  btncorvistaEvermelha.addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "none";
    document.querySelector('.frente13').style.display = "none";
    document.querySelector('.costas13').style.display = "block";
    document.querySelector('.costas14').style.display = "block";
    document.querySelector('.frente14').style.display = "block";
    document.querySelector('.frente15').style.display = "block";
    document.querySelector('.frente16').style.display = "none";
    document.querySelector('.frente17').style.display = "none";
    document.querySelector('.costas11').style.display = "none";
    document.querySelector('.costas12').style.display = "none";
    document.querySelector('.costas15').style.display = "none";
  });  
  //vistaE amarela
  const btncorvistaEamarela = document.getElementById('yellowbase5');
  btncorvistaEamarela.addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "block";
    document.querySelector('.frente13').style.display = "block";
    document.querySelector('.costas13').style.display = "block";
    document.querySelector('.costas14').style.display = "block";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "block";
    document.querySelector('.frente17').style.display = "block";
    document.querySelector('.costas11').style.display = "block";
    document.querySelector('.costas12').style.display = "block";
    document.querySelector('.costas15').style.display = "none";
  });  
  //vistaE verde
  const btncorvistaEverde = document.getElementById('greenbase5');
  btncorvistaEverde.addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "block";
    document.querySelector('.frente13').style.display = "block";
    document.querySelector('.costas13').style.display = "none";
    document.querySelector('.costas14').style.display = "none";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "none";
    document.querySelector('.frente17').style.display = "none";
    document.querySelector('.costas11').style.display = "none";
    document.querySelector('.costas12').style.display = "none";
    document.querySelector('.costas15').style.display = "none";
  });

  document.getElementById('base05').addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "none";
    document.querySelector('.frente13').style.display = "none";
    document.querySelector('.costas13').style.display = "none";
    document.querySelector('.costas14').style.display = "none";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "none";
    document.querySelector('.frente17').style.display = "none";
    document.querySelector('.costas11').style.display = "none";
    document.querySelector('.costas12').style.display = "none";
    document.querySelector('.costas15').style.display = "block";
  });
  document.getElementById('base5').addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "none";
    document.querySelector('.frente13').style.display = "none";
    document.querySelector('.costas13').style.display = "block";
    document.querySelector('.costas14').style.display = "block";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "none";
    document.querySelector('.frente17').style.display = "none";
    document.querySelector('.costas11').style.display = "none";
    document.querySelector('.costas12').style.display = "none";
    document.querySelector('.costas15').style.display = "none";
  });
  document.getElementById('base15').addEventListener('click', function(e){
    document.querySelector('.frente12').style.display = "none";
    document.querySelector('.frente13').style.display = "none";
    document.querySelector('.costas13').style.display = "none";
    document.querySelector('.costas14').style.display = "none";
    document.querySelector('.frente14').style.display = "none";
    document.querySelector('.frente15').style.display = "none";
    document.querySelector('.frente16').style.display = "block";
    document.querySelector('.frente17').style.display = "block";
    document.querySelector('.costas11').style.display = "block";
    document.querySelector('.costas12').style.display = "block";
    document.querySelector('.costas15').style.display = "none";
  });

  //peitilho2
  const btnpeitilho2 = document.getElementById('vista1');
  btnpeitilho2.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      console.log("peitilho1");
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "visible";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "visible";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "visible";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //peitilho2 branco
  const bntcorpeitilho2branco = document.getElementById('whitebase6');
  bntcorpeitilho2branco.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "#fff";
    document.getElementById('VD').style.backgroundColor = "#fff";
  });

  //peitilho2 preta
  const btncorpeitilho2preto = document.getElementById('blackbase6');
  btncorpeitilho2preto.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "#000";
    document.getElementById('VD').style.backgroundColor = "#000";
  });
  //peitilho2 azul
  const btncorpeitilho2azul = document.getElementById('bluebase6');
  btncorpeitilho2azul.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "blue";
    document.getElementById('VD').style.backgroundColor = "blue";
  });    
  //peitilho2 vermelha
  const btncorpeitilho2vermelha = document.getElementById('redbase6');
  btncorpeitilho2vermelha.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "red";
    document.getElementById('VD').style.backgroundColor = "red";
  });  
  //peitilho2 amarela
  const btncorpeitilho2amarela = document.getElementById('yellowbase6');
  btncorpeitilho2amarela.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "yellow";
    document.getElementById('VD').style.backgroundColor = "yellow";
  });  
  //peitilho2 verde
  const btncorpeitilho2verde = document.getElementById('greenbase6');
  btncorpeitilho2verde.addEventListener('click', function(e){
    document.getElementById('peitilho1').style.fill = "green";
    document.getElementById('VD').style.backgroundColor = "green";
  });



  //Peitilho2
  const btnbolsoF = document.getElementById('bolsobtn');
  btnbolsoF.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "visible";
      document.getElementById('btncorfriso').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "visible";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "visible";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Peitilho2 branco
  const bntcorbolsoFbranco = document.getElementById('whitebase7');
  bntcorbolsoFbranco.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "#fff";
    document.getElementById('BSF').style.backgroundColor = "#fff";
  });

  //Peitilho2 preta
  const btncorbolsoFpreto = document.getElementById('blackbase7');
  btncorbolsoFpreto.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "#000";
    document.getElementById('BSF').style.backgroundColor = "#000";
  });
  //Peitilho2 azul
  const btncorbolsoFazul = document.getElementById('bluebase7');
  btncorbolsoFazul.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "blue";
    document.getElementById('BSF').style.backgroundColor = "blue";
  });    
  //Peitilho2 vermelha
  const btncorbolsoFvermelha = document.getElementById('redbase7');
  btncorbolsoFvermelha.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "red";
    document.getElementById('BSF').style.backgroundColor = "red";
  });  
  //Peitilho2 amarela
  const btncorbolsoFamarela = document.getElementById('yellowbase7');
  btncorbolsoFamarela.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "yellow";
    document.getElementById('BSF').style.backgroundColor = "yellow";
  });  
  //Peitilho2 verde
  const btncorbolsoFverde = document.getElementById('greenbase7');
  btncorbolsoFverde.addEventListener('click', function(e){
    document.getElementById('peitilho2').style.fill = "green";
    document.getElementById('BSF').style.backgroundColor = "green";
  });



  //friso
  const btnbolsoB = document.getElementById('bolso1');
  btnbolsoB.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('btncorpunho').style.visibility = "hidden";
      document.getElementById('btncorpeitilho1').style.visibility = "hidden";
      document.getElementById('btncorpeitilho2').style.visibility = "hidden";
      document.getElementById('btncorfriso').style.visibility = "visible";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "visible";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "visible";}
  });
 //friso branco
  const bntcorbolsoBbranco = document.getElementById('whitebase8');
  bntcorbolsoBbranco.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "#fff";
    document.getElementById('friso1').style.fill = "#fff";
    document.getElementById('BB').style.backgroundColor = "#fff";
  });

 //friso preta
  const btncorbolsoBpreto = document.getElementById('blackbase8');
  btncorbolsoBpreto.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "#000";
    document.getElementById('friso1').style.fill = "#000";
    document.getElementById('BB').style.backgroundColor = "#000";
  });
 //friso azul
  const btncorbolsoBazul = document.getElementById('bluebase8');
  btncorbolsoBazul.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "blue";
    document.getElementById('friso1').style.fill = "blue";
    document.getElementById('BB').style.backgroundColor = "blue";
  });    
 //friso vermelha
  const btncorbolsoBvermelha = document.getElementById('redbase8');
  btncorbolsoBvermelha.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "red";
    document.getElementById('friso1').style.fill = "red";
    document.getElementById('BB').style.backgroundColor = "red";
  });  
 //friso amarela
  const btncorbolsoBamarela = document.getElementById('yellowbase8');
  btncorbolsoBamarela.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "yellow";
    document.getElementById('friso1').style.fill = "yellow";
    document.getElementById('BB').style.backgroundColor = "yellow";
  });  
 //friso verde
  const btncorbolsoBverde = document.getElementById('greenbase8');
  btncorbolsoBverde.addEventListener('click', function(e){
    document.getElementById('friso').style.fill = "green";
    document.getElementById('friso1').style.fill = "green";
    document.getElementById('BB').style.backgroundColor = "green";
  });


  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.querySelector(".frente18").style.display = "block";
      document.querySelector(".costas16").style.display = "block";
    }else {
      document.querySelector(".frente18").style.display = "none";
      document.querySelector(".costas16").style.display = "none";
    }});


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Calça.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

  var canvas = new fabric.Canvas('list');
  let uploader = document.getElementById("uploader");
  uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
  var image = new Image();
  image.src = e.target.result;
  image.onload = function() {
    var img = new fabric.Image(image);
    img.set({
      left: 100,
      top: 60
    });
    img.scaleToWidth(200);
    canvas.add(img).setActiveObject(img).renderAll();
    }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
  document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: 'pointer',
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24
});


function deleteObject(eventData, transform) {
      var target = transform.target;
      var canvas = target.canvas;
          canvas.remove(target);
      canvas.requestRenderAll();
  };

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
  var size = this.cornerSize;
  ctx.save();
  ctx.translate(left, top);
  ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
  ctx.drawImage(imga, -size/2, -size/2, size, size);
  ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.visibility = "visible";   
    }else {
      document.getElementById('switch-shadow').disabled = false;
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.visibility = "hidden" ;
  }
});


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
        document.getElementById('coresb').style.visibility = "hidden";
        document.getElementById('coresGE').style.visibility = "hidden";
        document.getElementById('coresGI').style.visibility = "hidden";
        document.getElementById('coresP').style.visibility = "hidden";
        document.getElementById('coresVE').style.visibility = "hidden";
        document.getElementById('coresVD').style.visibility = "hidden";
        document.getElementById('coresBF').style.visibility = "hidden";
        document.getElementById('coresBB').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpunho').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorpeitilho1').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "visible";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorpeitilho2').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "visible";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
document.getElementById('botaocorfriso').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
