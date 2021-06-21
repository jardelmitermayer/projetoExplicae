const root = document.querySelector('#root');

function buttonToHome () {
  var button = document.createElement('button');
  button.id = 'btn-to-home';
  button.innerHTML = 'INICIO';
  button.onclick = function () {
    window.location.href = 'home.html'
  }
  root.appendChild(button)
}
buttonToHome();