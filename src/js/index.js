/* 
  Obejetivo 1 - quando o usuario clicar no botão veja o  traier, devemos abrir a mordal com o video do trailer.

   - dar um jeito de de pegar o elemento que representa o botão na tela usando o js.
   - dar um jeito de indentificar quando o usuario clicar no botão.
   - dar um jeito de pegar o elemento da modal no js.
   - abrir a modal na tela.

  Obejetivo 2 - quando o usuario clicar no x devemos fechar a modal.
   - dar um jeito de pegar o elemento de fechar modal usando o js
   - dar um jeito de pindentificar quando o usuario clicar no x
   - fechar a modal.

*/
console.log(document);
console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");

const video = document.getElementById("video")

const modal = document.querySelector(".modal");

const linckDoVideo = video.src;


function alternarModal(){
    modal.classList.toggle("aberto");

}

botaoTrailer.addEventListener ("click",() => { 
    alternarModal();
   video.setAttribute("src", linckDoVideo);
})

const botaofecharModal = document.querySelector(".fechar-modal")

botaofecharModal.addEventListener ("click",() => { 
    
    alternarModal();
    video.setAttribute("src", "");

});






