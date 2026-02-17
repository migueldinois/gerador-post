const nomeExibicao = document.getElementById('nomeExibicao')
const inputNomeExibicao = document.getElementById('inputNomeExibicao')

const nomeUsuario = document.getElementById('nomeUsuario')
const inputNomeUsuario = document.getElementById('inputNomeUsuario')


const conteudoPost = document.getElementById('conteudoPost')
const inputConteudoPost = document.getElementById('inputConteudoPost')

const fotoDePerfil = document.getElementById('fotoDePerfil')
const inputFotoDePerfil = document.getElementById('inputFotoDePerfil')

const dataPost = document.getElementById('dataPost')
const inputDataPost = document.getElementById('inputDataPost')


inputNomeExibicao.addEventListener('input', () => {

  nomeExibicao.textContent = inputNomeExibicao.value;

});

inputNomeUsuario.addEventListener('input', () => {

  nomeUsuario.textContent = ("@" + inputNomeUsuario.value);

});

inputConteudoPost.addEventListener('input', () => {

  conteudoPost.textContent = inputConteudoPost.value;

});

inputFotoDePerfil.addEventListener('input', () => {

    fotoDePerfil.src = inputFotoDePerfil.value

})

inputDataPost.addEventListener('input', () => {
    dataPost.innerText = inputDataPost.value
})