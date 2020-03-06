let postPersonalInfo = () => {
  let payload = {
    name: document.getElementById('nameInput').value;
    lastName: document.getElementById('lastNameInput').value;
    cpf: document.getElementById('cpfInput').value;
    dateOfBirth: document.getElementById('dateOfBirthInput').value;
    email: document.getElementById('emailInput').value;
    phone: document.getElementById('phoneInput').value;
  }
