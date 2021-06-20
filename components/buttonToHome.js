function buttonToHome () {
  var button = document.createElement('button');
  button.id = 'btn-to-home';
  button.innerHTML = 'Home';
  button.style.background = '#EF233C'
  button.onclick = function () {
    window.location.href = 'index.html'
  }
  document.body.appendChild(button)
}
buttonToHome();