const xhr = new XMLHttpRequest();

xhr.onload = () => {
  console.log(this.responseText);
}

let postPersonalInfo = () => {
  let payload = {
    firstName: document.getElementById('nameInput').value,
    lastName: document.getElementById('lastNameInput').value,
    document: document.getElementById('cpfInput').value,
    birthDate: document.getElementById('dateOfBirthInput').value,
    email: document.getElementById('emailInput').value,
    phone: document.getElementById('phoneInput').value,
  }

  xhr.open('POST', `https://desafio-digital-secomp.firebaseio.com/${payload.document}/dados.json`);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(payload));
}
