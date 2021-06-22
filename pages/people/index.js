const tableDiv = document.querySelector('#tablePeople');
async function getUsers () {
  const response = await fetch('https://randomuser.me/api')
  var data = await response.json();      
  console.log(data.results)
  const { picture, name, gender, email, location, nat} = data.results[0];
  console.log(data.results[0].picture.large)
  document.getElementById('photo').src = picture.thumbnail;
  document.getElementById('name').innerText = `${name.first} ${name.last}`;
  document.getElementById('gender').innerText = gender;
  document.getElementById('email').innerText = email;
  document.getElementById('city').innerText = `${location.city}`;
  document.getElementById('nat').innerText = nat;
  document.getElementById('email').style.wordWrap = 'break-word';
}
getUsers()