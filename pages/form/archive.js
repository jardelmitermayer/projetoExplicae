const div = document.querySelector('#root');

const input = document.getElementById('input-file')
//input.addEventListener('#change', readImage, false)

async function onSubmit (event) {
  event.preventDefault()
  const readTextFromFile = new readText();
  var getFile = document.getElementById('inputArchive');
 
  await readTextFromFile.uploadFile(getFile);

  const textArea = document.getElementById('archive');
  textArea.textContent = readTextFromFile.getArchive();

  
}

const getForm = document.querySelector('#form')

function submitForm (event)  {
  event.preventDefault();
  onSubmit(event)
}

getForm.addEventListener('submit', submitForm)