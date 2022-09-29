/*--------------------*/
/*   VALIDAR O NOME   */ 
/*--------------------*/
const nome = document.querySelector('#nome')
let nomeOk = false

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if(nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
    nomeOk = false
  } else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

/*---------------------*/
/*   VALIDAR O EMAIL   */
/*---------------------*/
const email = document.querySelector('#email')
let emailOk = false

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'Email inválido'
    txtEmail.style.color = 'red'
    emailOk = false
  } else {
    txtEmail.innerHTML = 'Email válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

/*----------------------------------------------------------*/
/* Validação de e-mail utilizando expressão regular:

function validaEmail2() {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let txtEmail = document.querySelector('#txtEmail')

  if(email.value.match(regex)){
    txtEmail.innerHTML = 'Email válido.'
    txtEmail.style.color = '#4A314D'
    emailOk = true
  } else {
    txtEmail.innerHTML = 'Email inválido.'
    txtEmail.style.color = '#EE2E31'
    emailOk = false
  }
}*/
/*----------------------------------------------------------*/
/*   VALIDAR A CAIXA DE MENSAGEM   */
/*---------------------------------*/
const mensagem = document.querySelector('#mensagem')
let mensagemOk = false

function validaMensagem() {
  let txtMsg = document.querySelector('#txtMsg')
  if(mensagem.value.length >= 100) {
    txtMsg.innerHTML = 'Mensagem muito grande, digite no máximo 100 caracteres.'
    txtMsg.style.color = 'red'
    mensagemOk = false
  } else {
    txtMsg.innerHTML = mensagem.value.length + '/100'
    txtMsg.style.color = 'green'
    mensagemOk = true
  }
}

/*---------------------*/
/*   VALIDAR O ENVIO   */
/*---------------------*/
function enviarForm() {
  if(nomeOk === true && emailOk === true && mensagemOk === true) {
    alert(nome.value + ', sua mensagem foi enviada com sucesso :) ')
  } else {
    alert('Por favor, preencha todos os campos corretamente')
  }

}

/*--------------------*/
/*   ESTILIZAR MAPA   */
/*--------------------*/
function mapaZoom() {
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}
function mapaNormal() {
  mapa.style.width = '400px'
  mapa.style.height = '300px'
}