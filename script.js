const button = document.getElementById('entrar');
const enviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

button.onclick = login;

function habilitar() {
  if (checkbox.checked === true) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
}
checkbox.onclick = habilitar;

const counter = document.querySelector('#counter');
// console.log(counter);

const textArea = document.querySelector('#textarea');
textArea.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textArea.value.length;
});
