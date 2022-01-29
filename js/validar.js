
function validarForm() {
  event.preventDefault()

  const INPUT_CEP = document.getElementById('cep');
  const MSG_ERRO = document.getElementById('msg-erro');
  const INPUT_LOGRADOURO = document.getElementById('logradouro');
  const INPUT_NUMERO = document.getElementById('numero');
  const INPUT_BAIRRO = document.getElementById('bairro');
  const INPUT_CIDADE = document.getElementById('cidade');
  const INPUT_UF = document.getElementById('uf');


  if(INPUT_CEP.value === '') {
    MSG_ERRO.style.display = 'block';
    INPUT_CEP.classList.add('is-invalid');
  }
  if(INPUT_LOGRADOURO.value === '') {
    MSG_ERRO.style.display = 'block';
    INPUT_LOGRADOURO.classList.add('is-invalid');
  }
  if(INPUT_NUMERO.value === '') {
    MSG_ERRO.style.display = 'block';
    INPUT_NUMERO.classList.add('is-invalid');
  }
  if(INPUT_BAIRRO.value === '') {
    MSG_ERRO.style.display = 'block';
    INPUT_BAIRRO.classList.add('is-invalid');
  }
  if(INPUT_CIDADE.value === '') {
    MSG_ERRO.style.display = 'block';
    INPUT_CIDADE.classList.add('is-invalid');
  }
  if(INPUT_UF.value === '') {
    MSG_ERRO.style.display = 'block';
    INPUT_UF.classList.add('is-invalid');
  }
}
