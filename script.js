/*funcionamento dos modais*/
const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog")
button.onclick = function () {
   modal.showModal()
}
buttonClose.onclick = function () {
   modal.close()
}

const button2 = document.querySelector("#button2")
const modal2 = document.querySelector("#modal2")
const button_close2 = document.querySelector("#button_close2")

button2.onclick = function () {
   modal2.showModal()
}
button_close2.onclick = function () {
   modal2.close()
}

const elemento1 = document.getElementById('imagemModoclaro');
const elemento2 = document.getElementById('imagemModoescuro');


/*modo escuro*/
function modoEscuro() {
   /*mudança de cor no body quando o botão for clicado*/
   document.body.style.backgroundColor = "black";
   var titulo = document.getElementById("titulo");
   titulo.style.backgroundColor = "#535554"
   var dialog = document.getElementById("modal");
   dialog.style.backgroundColor = "#919191"
   var dialog = document.getElementById("modal2");
   dialog.style.backgroundColor = "#919191"
   var btnfecha = document.getElementById("button_close");
   btnfecha.style.backgroundColor = "#535554"
   var btnfecha2 = document.getElementById("button_close2");
   btnfecha2.style.backgroundColor = "#5a5c5b"

   /*mudança na cor das letras*/
   document.getElementById('titulo').style.color = 'rgb(191, 194, 192)';
   document.getElementById('h5').style.color = 'rgb(191, 194, 192)';
   document.getElementById('h4').style.color = 'rgb(191, 194, 192)';
   document.getElementById('metodos').style.color = 'rgb(191, 194, 192)';
   document.getElementById('h7').style.color = 'rgb(191, 194, 192)';
   var h6 = document.getElementById("metodos").style.color = 'rgb(191, 194, 192)';

   /*esconder imagens*/
   imagemModoescuro.style.display = 'block';
   tratormodoescuro.style.display = 'block';

   /*mudança na cor de fundo dos retangulos para cinza*/
   retangulo.style.backgroundColor = 'gray';
   retangulo2.style.backgroundColor = 'gray';
   retangulo4.style.backgroundColor = 'gray';
   retanguloquizz.style.backgroundColor = 'gray';

   /*mudança na cor de fundo das letras para cinza*/
   quizz.style.backgroundColor = 'gray';
   questão.style.backgroundColor = 'gray';
   questão2.style.backgroundColor = 'gray';
   questão3.style.backgroundColor = 'gray';
   questão4.style.backgroundColor = 'gray';
   p10.style.backgroundColor = 'gray';

   /*mudança na cor de fundo dos elementos do quiz para cinza*/
   start.style.backgroundColor = 'gray';
   Próximobtn.style.backgroundColor = 'gray';
   Próximobtn2.style.backgroundColor = 'gray';
   Próximobtn3.style.backgroundColor = 'gray';
   Próximobtn4.style.backgroundColor = 'gray';
   Recomeçar.style.backgroundColor = 'gray';
   Acertos.style.backgroundColor = 'gray';
  
   /*mudança no style dos elementos do quiz*/
   Acertos.style.color = 'rgb(63, 4, 78)';
   Acertos.style.fontFamily = 'serif';
   Acertos.style.border = '2px solid rgb(63, 4, 78)';
   p6.style.backgroundColor = 'gray';
   p6.style.border = '2px solid rgb(63, 4, 78)';
   p6.style.color = 'rgb(63, 4, 78)';
   p6.style.fontFamily = 'serif';

   /*mudança na cor das letras*/
   document.getElementById('questão').style.color = 'rgb(209, 209, 211)';
   document.getElementById('questão2').style.color = 'rgb(209, 209, 211)';
   document.getElementById('questão3').style.color = 'rgb(209, 209, 211)';
   document.getElementById('questão4').style.color = 'rgb(209, 209, 211)';
   document.getElementById('Vocêsabia').style.color = 'rgb(209, 209, 211)';
    document.getElementById('p10').style.color = 'rgb(209, 209, 211)';
}

/*modo normal/claro*/
function modoClaro() {
   /*mudança de cor no body quando o botão for clicado*/
   document.body.style.backgroundColor = "rgb(81, 155, 240)";
   var titulo = document.getElementById("titulo");
   titulo.style.backgroundColor = "white";
   var dialog = document.getElementById("modal");
   dialog.style.backgroundColor = "#d0f3cc"
   var dialog = document.getElementById("modal2");
   dialog.style.backgroundColor = "#d0f3cc"
   var btnfecha = document.getElementById("button_close");
   btnfecha.style.backgroundColor = "rgb(168, 110, 23)"
   var btnfecha2 = document.getElementById("button_close2");
   btnfecha2.style.backgroundColor = "rgb(119, 51, 136)"

   /*mudança na cor das letras*/
   document.getElementById('h5').style.color = 'rgb(23, 139, 68)';
   document.getElementById('h4').style.color = 'rgb(23, 139, 68)';
   document.getElementById('titulo').style.color = 'rgb(23, 139, 68)';
   document.getElementById('metodos').style.color = 'rgb(23, 139, 68)';
   document.getElementById('h7').style.color = 'rgb(23, 139, 68)';
   document.getElementById('Vocêsabia').style.color = 'rgb(23, 139, 68)';
   document.getElementById('p10').style.color = 'rgb(71, 19, 121)';

   /*aparecer imagens*/
   imagemModoescuro.style.display = 'none';
   tratormodoescuro.style.display = 'none';

   /*mudança na cor de fundo dos elementos*/
   p10.style.backgroundColor = 'white';
   
   /*mudança na cor de fundo dos retangulos*/
   retangulo.style.backgroundColor = 'white';
   retangulo2.style.backgroundColor = 'white';
   retangulo4.style.backgroundColor = 'white';
   retanguloquizz.style.backgroundColor = 'rgb(66, 0, 138)';

   /*mudança na cor de fundo dos elementos do quiz para amarelo*/
   start.style.backgroundColor = '#c0ad04';
   Próximobtn.style.backgroundColor = '#c0ad04';
   Próximobtn2.style.backgroundColor = '#c0ad04';
   Próximobtn3.style.backgroundColor = '#c0ad04';
   Próximobtn4.style.backgroundColor = '#c0ad04';
   Recomeçar.style.backgroundColor = '#c0ad04';
   quizz.style.backgroundColor = '#c0ad04';
   questão.style.backgroundColor = '#c0ad04';
   questão2.style.backgroundColor = '#c0ad04';
   questão3.style.backgroundColor = '#c0ad04';
   questão4.style.backgroundColor = '#c0ad04';
   Acertos.style.backgroundColor = '#c0ad04';

   /*mudança no style dos elementos do quiz*/
   Acertos.style.color = 'rgb(243, 240, 240)';
   Acertos.style.fontFamily = 'Arial, Helvetica, sans-serif';
   Acertos.style.border = 'none';
   p6.style.backgroundColor = '#c0ad04';
   p6.style.border = 'none';
   p6.style.color = 'rgb(243, 240, 240)';
   p6.style.fontFamily = 'Arial, Helvetica, sans-serif';

}

/*quizz*/
const start = document.querySelector("#start")
let pontuacao = 0;
const botaoReset = document.getElementById('start');
pontuacao = 0;

start.onclick = function () {
   document.getElementById('start').style.display = 'none'
   document.getElementById('engrenagem').style.display = 'none'
   document.getElementById('quizz').style.display = 'none'
   document.getElementById('questão').style.display = 'block'

   /*habilitar o cursor pointer na 1 questão*/
   document.getElementById('btnquiz1').style.display = 'block'
   document.getElementById('btnquiz1').style.cursor = 'pointer';
   document.getElementById('btnquiz1').style.pointerEvents = 'auto';
   document.getElementById('btnquiz2').style.display = 'block'
   document.getElementById('btnquiz2').style.cursor = 'pointer';
   document.getElementById('btnquiz2').style.pointerEvents = 'auto';
   document.getElementById('btnquiz3').style.display = 'block'
   document.getElementById('btnquiz3').style.cursor = 'pointer';
   document.getElementById('btnquiz3').style.pointerEvents = 'auto';
   document.getElementById('btnquiz4').style.display = 'block'
   document.getElementById('btnquiz4').style.cursor = 'pointer';
   document.getElementById('btnquiz4').style.pointerEvents = 'auto';

   /*habilitar o cursor pointer na 2 questão*/
   document.getElementById('btnquiz5').style.pointerEvents = 'auto';
   document.getElementById('btnquiz5').style.cursor = 'pointer';
   document.getElementById('btnquiz6').style.pointerEvents = 'auto';
   document.getElementById('btnquiz6').style.cursor = 'pointer';
   document.getElementById('btnquiz7').style.pointerEvents = 'auto';
   document.getElementById('btnquiz7').style.cursor = 'pointer';
   document.getElementById('btnquiz8').style.pointerEvents = 'auto';
   document.getElementById('btnquiz8').style.cursor = 'pointer';

   /*habilitar o cursor pointer na 3 questão*/
   document.getElementById('btnquiz9').style.pointerEvents = 'auto';
   document.getElementById('btnquiz9').style.cursor = 'pointer';
   document.getElementById('btnquiz10').style.pointerEvents = 'auto';
   document.getElementById('btnquiz10').style.cursor = 'pointer';
   document.getElementById('btnquiz11').style.pointerEvents = 'auto';
   document.getElementById('btnquiz11').style.cursor = 'pointer';
   document.getElementById('btnquiz12').style.pointerEvents = 'auto';
   document.getElementById('btnquiz12').style.cursor = 'pointer';

   /*habilitar o cursor pointer na 4 questão*/
   document.getElementById('btnquiz13').style.cursor = 'pointer';
   document.getElementById('btnquiz13').style.pointerEvents = 'auto';
   document.getElementById('btnquiz14').style.cursor = 'pointer';
   document.getElementById('btnquiz14').style.pointerEvents = 'auto';
   document.getElementById('btnquiz15').style.cursor = 'pointer';
   document.getElementById('btnquiz15').style.pointerEvents = 'auto';
   document.getElementById('btnquiz16').style.cursor = 'pointer';
   document.getElementById('btnquiz16').style.pointerEvents = 'auto';

   /*mudar a cor quando recomeçar*/
   document.getElementById('btnquiz1').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz2').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz3').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz4').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz5').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz6').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz7').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz8').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz9').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz10').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz11').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz12').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz13').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz14').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz15').style.backgroundColor = '#c0ad04'
   document.getElementById('btnquiz16').style.backgroundColor = '#c0ad04'
}

/*botões da 1 questão*/
const btnquiz1 = document.querySelector("#btnquiz1")
btnquiz1.onclick = function () {
   document.getElementById('btnquiz1').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz1').style.cursor = 'none';
   document.getElementById('btnquiz2').style.display = 'none'
   document.getElementById('btnquiz3').style.display = 'none'
   document.getElementById('btnquiz4').style.display = 'none'
   document.getElementById('Próximobtn').style.display = 'block'

}
const btnquiz2 = document.querySelector("#btnquiz2")
btnquiz2.onclick = function () {
   pontuacao = pontuacao + 1;
   document.getElementById('btnquiz1').style.display = 'none'
   document.getElementById('btnquiz2').style.backgroundColor = 'green'
   document.getElementById('btnquiz2').style.pointerEvents = 'none'
   document.getElementById('btnquiz2').style.cursor = 'none'
   document.getElementById('btnquiz3').style.display = 'none'
   document.getElementById('btnquiz4').style.display = 'none'
   document.getElementById('Próximobtn').style.display = 'block'
}
const btnquiz3 = document.querySelector("#btnquiz3")
btnquiz3.onclick = function () {
   document.getElementById('btnquiz1').style.display = 'none'
   document.getElementById('btnquiz2').style.display = 'none'
   document.getElementById('btnquiz3').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz3').style.cursor = 'none'
   document.getElementById('btnquiz3').style.pointerEvents = 'none'
   document.getElementById('btnquiz4').style.display = 'none'
   document.getElementById('Próximobtn').style.display = 'block'
}
const btnquiz4 = document.querySelector("#btnquiz4")
btnquiz4.onclick = function () {
   document.getElementById('btnquiz1').style.display = 'none'
   document.getElementById('btnquiz2').style.display = 'none'
   document.getElementById('btnquiz3').style.display = 'none'
   document.getElementById('btnquiz4').style.cursor = 'none'
   document.getElementById('btnquiz4').style.pointerEvents = 'none'
   document.getElementById('btnquiz4').style.backgroundColor = '#860d09'
   document.getElementById('Próximobtn').style.display = 'block'
}
const Próximobtn = document.querySelector("#Próximobtn")
Próximobtn.onclick = function () {
   document.getElementById('btnquiz1').style.display = 'none'
   document.getElementById('btnquiz2').style.display = 'none'
   document.getElementById('btnquiz3').style.display = 'none'
   document.getElementById('btnquiz4').style.display = 'none'
   document.getElementById('Próximobtn').style.display = 'none'
   document.getElementById('questão').style.display = 'none'
   document.getElementById('btnquiz5').style.display = 'block'
   document.getElementById('btnquiz6').style.display = 'block'
   document.getElementById('btnquiz7').style.display = 'block'
   document.getElementById('btnquiz8').style.display = 'block'
   document.getElementById('questão2').style.display = 'block'
}
/*botões da 2 questão*/
const btnquiz5 = document.querySelector("#btnquiz5")
btnquiz5.onclick = function () {
   document.getElementById('btnquiz5').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz5').style.cursor = 'none'
   document.getElementById('btnquiz5').style.pointerEvents = 'none'
   document.getElementById('btnquiz6').style.display = 'none'
   document.getElementById('btnquiz7').style.display = 'none'
   document.getElementById('btnquiz8').style.display = 'none'
   document.getElementById('Próximobtn2').style.display = 'block'
}
const btnquiz6 = document.querySelector("#btnquiz6")
btnquiz6.onclick = function () {
   document.getElementById('btnquiz5').style.display = 'none'
   document.getElementById('btnquiz6').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz6').style.cursor = 'none'
   document.getElementById('btnquiz6').style.pointerEvents = 'none'
   document.getElementById('btnquiz7').style.display = 'none'
   document.getElementById('btnquiz8').style.display = 'none'
   document.getElementById('Próximobtn2').style.display = 'block'
}
const btnquiz7 = document.querySelector("#btnquiz7")
btnquiz7.onclick = function () {
   document.getElementById('btnquiz5').style.display = 'none'
   document.getElementById('btnquiz6').style.display = 'none'
   document.getElementById('btnquiz7').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz7').style.cursor = 'none'
   document.getElementById('btnquiz7').style.pointerEvents = 'none'
   document.getElementById('btnquiz8').style.display = 'none'
   document.getElementById('Próximobtn2').style.display = 'block'
}
const btnquiz8 = document.querySelector("#btnquiz8")
btnquiz8.onclick = function () {
   pontuacao = pontuacao + 1;
   document.getElementById('btnquiz5').style.display = 'none'
   document.getElementById('btnquiz6').style.display = 'none'
   document.getElementById('btnquiz7').style.display = 'none'
   document.getElementById('btnquiz8').style.backgroundColor = 'green'
   document.getElementById('btnquiz8').style.cursor = 'none'
   document.getElementById('btnquiz8').style.pointerEvents = 'none'
   document.getElementById('Próximobtn2').style.display = 'block'
}
const Próximobtn2 = document.querySelector("#Próximobtn2")
Próximobtn2.onclick = function () {
   document.getElementById('btnquiz5').style.display = 'none'
   document.getElementById('btnquiz6').style.display = 'none'
   document.getElementById('btnquiz7').style.display = 'none'
   document.getElementById('btnquiz8').style.display = 'none'
   document.getElementById('Próximobtn2').style.display = 'none'
   document.getElementById('questão2').style.display = 'none'
   document.getElementById('btnquiz9').style.display = 'block'
   document.getElementById('btnquiz10').style.display = 'block'
   document.getElementById('btnquiz11').style.display = 'block'
   document.getElementById('btnquiz12').style.display = 'block'
   document.getElementById('questão3').style.display = 'block'
}

/*botões da 3 questão*/
const btnquiz9 = document.querySelector("#btnquiz9")
btnquiz9.onclick = function () {
   document.getElementById('btnquiz9').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz9').style.cursor = 'none'
   document.getElementById('btnquiz9').style.pointerEvents = 'none'
   document.getElementById('btnquiz10').style.display = 'none'
   document.getElementById('btnquiz11').style.display = 'none'
   document.getElementById('btnquiz12').style.display = 'none'
   document.getElementById('Próximobtn3').style.display = 'block'
}
const btnquiz10 = document.querySelector("#btnquiz10")
btnquiz10.onclick = function () {
   document.getElementById('btnquiz9').style.display = 'none'
   document.getElementById('btnquiz10').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz10').style.cursor = 'none'
   document.getElementById('btnquiz10').style.pointerEvents = 'none'
   document.getElementById('btnquiz11').style.display = 'none'
   document.getElementById('btnquiz12').style.display = 'none'
   document.getElementById('Próximobtn3').style.display = 'block'
}
const btnquiz11 = document.querySelector("#btnquiz11")
btnquiz11.onclick = function () {
   document.getElementById('btnquiz9').style.display = 'none'
   document.getElementById('btnquiz10').style.display = 'none'
   document.getElementById('btnquiz11').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz11').style.cursor = 'none'
   document.getElementById('btnquiz11').style.pointerEvents = 'none'
   document.getElementById('btnquiz12').style.display = 'none'
   document.getElementById('Próximobtn3').style.display = 'block'
}
const btnquiz12 = document.querySelector("#btnquiz12")
btnquiz12.onclick = function () {
   pontuacao = pontuacao + 1;
   document.getElementById('btnquiz9').style.display = 'none'
   document.getElementById('btnquiz10').style.display = 'none'
   document.getElementById('btnquiz11').style.display = 'none'
   document.getElementById('btnquiz12').style.backgroundColor = 'green'
   document.getElementById('btnquiz12').style.cursor = 'none'
   document.getElementById('btnquiz12').style.pointerEvents = 'none'
   document.getElementById('Próximobtn3').style.display = 'block'
}
const Próximobtn3 = document.querySelector("#Próximobtn3")
Próximobtn3.onclick = function () {
   document.getElementById('btnquiz9').style.display = 'none'
   document.getElementById('btnquiz10').style.display = 'none'
   document.getElementById('btnquiz11').style.display = 'none'
   document.getElementById('btnquiz12').style.display = 'none'
   document.getElementById('Próximobtn3').style.display = 'none'
   document.getElementById('questão3').style.display = 'none'
   document.getElementById('questão4').style.display = 'block'
   document.getElementById('btnquiz13').style.display = 'block'
   document.getElementById('btnquiz14').style.display = 'block'
   document.getElementById('btnquiz15').style.display = 'block'
   document.getElementById('btnquiz16').style.display = 'block'
}

/*botões da 4 questão*/
const btnquiz13 = document.querySelector("#btnquiz13")
btnquiz13.onclick = function () {
   pontuacao = pontuacao + 1;
   document.getElementById('btnquiz13').style.backgroundColor = 'green'
   document.getElementById('btnquiz13').style.cursor = 'none'
   document.getElementById('btnquiz13').style.pointerEvents = 'none'
   document.getElementById('btnquiz14').style.display = 'none'
   document.getElementById('btnquiz15').style.display = 'none'
   document.getElementById('btnquiz16').style.display = 'none'
   document.getElementById('Próximobtn4').style.display = 'block'
}
const btnquiz14 = document.querySelector("#btnquiz14")
btnquiz14.onclick = function () {
   document.getElementById('btnquiz13').style.display = 'none'
   document.getElementById('btnquiz14').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz14').style.cursor = 'none'
   document.getElementById('btnquiz14').style.pointerEvents = 'none'
   document.getElementById('btnquiz15').style.display = 'none'
   document.getElementById('btnquiz16').style.display = 'none'
   document.getElementById('Próximobtn4').style.display = 'block'
}
const btnquiz15 = document.querySelector("#btnquiz15")
btnquiz15.onclick = function () {
   document.getElementById('btnquiz13').style.display = 'none'
   document.getElementById('btnquiz14').style.display = 'none'
   document.getElementById('btnquiz15').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz15').style.cursor = 'none'
   document.getElementById('btnquiz15').style.pointerEvents = 'none'
   document.getElementById('btnquiz16').style.display = 'none'
   document.getElementById('Próximobtn4').style.display = 'block'
}
const btnquiz16 = document.querySelector("#btnquiz16")
btnquiz16.onclick = function () {
   document.getElementById('btnquiz13').style.display = 'none'
   document.getElementById('btnquiz14').style.display = 'none'
   document.getElementById('btnquiz15').style.display = 'none'
   document.getElementById('btnquiz16').style.backgroundColor = '#860d09'
   document.getElementById('btnquiz16').style.cursor = 'none';
   document.getElementById('btnquiz16').style.pointerEvents = 'none';
   document.getElementById('Próximobtn4').style.display = 'block'
}
const Próximobtn4 = document.querySelector("#Próximobtn4")
Próximobtn4.onclick = function () {
   document.getElementById('btnquiz13').style.display = 'none'
   document.getElementById('btnquiz14').style.display = 'none'
   document.getElementById('btnquiz15').style.display = 'none'
   document.getElementById('btnquiz16').style.display = 'none'
   document.getElementById('Próximobtn4').style.display = 'none'
   document.getElementById('questão4').style.display = 'none'
   document.getElementById('Acertos').style.display = 'block'
   document.getElementById('Acertos').innerHTML = "Acertos: " + pontuacao;
   document.getElementById('p6').style.display = 'block'
   document.getElementById('Recomeçar').style.display = 'block'
}
const Recomeçar = document.querySelector("#Recomeçar")
Recomeçar.onclick = function () {
   const botaoReset = document.getElementById('Recomeçar');
   pontuacao = 0;
   document.getElementById('Acertos').style.display = 'none'
   document.getElementById('p6').style.display = 'none'
   document.getElementById('Recomeçar').style.display = 'none'
   document.getElementById('engrenagem').style.display = 'block'
   document.getElementById('quizz').style.display = 'block'
   document.getElementById('start').style.display = 'block'
}
/*seção você sabia?*/
const seguir = document.querySelector("#seguir")
seguir.onclick = function () {
   document.getElementById('imgAbelha').style.display = 'none';
   document.getElementById('imgDrone').style.display = 'block';
   document.getElementById('abelhafrase').style.display = 'none';
   document.getElementById('seguir').style.display = 'none';
   document.getElementById('AbelhaAudio').style.display = 'none';
   document.getElementById('seguir2').style.display = 'block';
   document.getElementById('dronefrase').style.display = 'block';
   document.getElementById('DroneAudio').style.display = 'block';
}
const seguir2 = document.querySelector("#seguir2")
seguir2.onclick = function () {
   document.getElementById('imgDrone').style.display = 'none';
   document.getElementById('DroneAudio').style.display = 'none';
   document.getElementById('imgArvore').style.display = 'block';
   document.getElementById('seguir2').style.display = 'none';
   document.getElementById('seguir3').style.display = 'block';
   document.getElementById('dronefrase').style.display = 'none';
   document.getElementById('arvorefrase').style.display = 'block';
   document.getElementById('ÁrvoreAudio').style.display = 'block';
}
const seguir3 = document.querySelector("#seguir3")
seguir3.onclick = function () {
   document.getElementById('imgArvore').style.display = 'none';
   document.getElementById('imgAbelha').style.display = 'block';
   document.getElementById('seguir3').style.display = 'none';
   document.getElementById('seguir').style.display = 'block';
   document.getElementById('arvorefrase').style.display = 'none';
   document.getElementById('ÁrvoreAudio').style.display = 'none';
   document.getElementById('abelhafrase').style.display = 'block';
   document.getElementById('AbelhaAudio').style.display = 'block';
}
