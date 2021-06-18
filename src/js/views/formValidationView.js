import View from './View';

class FormValidationView extends View {
  _form = document.querySelector('form');

  addHandlerSubmit() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameField = this._form.querySelector('#name-field');
      const phoneField = this._form.querySelector('#phone-field');
      const x = this._checkNameField(nameField);
      console.log(x);
      const y = this._checkPhoneField(phoneField);
      console.log(y);
    });
  }

  _checkNameField(name) {
    const regEx = /^[a-zA-z]+$/;
    return regEx.test(name.value) && name.value.length >= 2;
  }

  _checkPhoneField(number) {
    const regEx = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;
    return (
      regEx.test(number.value) &&
      (number.value.length === 11 || number.value.length === 12)
    );
  }

  _checkMailField() {}

  _checkMessageField() {}
}

export default new FormValidationView();
