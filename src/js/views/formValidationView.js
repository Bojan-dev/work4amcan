import View from './View';

class FormValidationView extends View {
  _form = document.querySelector('form');
  _allInputs = this._form.querySelectorAll('input');
  _nameField = this._form.querySelector('#name-field');
  _phoneField = this._form.querySelector('#phone-field');
  _mailField = this._form.querySelector('#mail-field');
  _messageField = this._form.querySelector('#message-field');
  _regExName = /^[a-z A-z]+$/;
  _regExPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  _regExMail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  _workerData = {};

  constructor() {
    super();
    this._allInputs.forEach((input) =>
      input.addEventListener('focus', function (e) {
        e.target.classList.remove('wrong-input');
        e.target.nextElementSibling.classList.add('hidden');
      })
    );
  }

  addHandlerSubmit() {
    this._form.addEventListener('submit', (e) => {
      const errors = [];
      //prettier-ignore
      if (!this._regExName.test(this._nameField.value)) this._showError(errors, this._nameField, 'Name can contain only letters');

      //prettier-ignore
      if (this._nameField.value.length <= 1) this._showError(errors, this._nameField, 'Name has to be at least 2 characters long')

      //prettier-ignore
      if(!this._regExPhone.test(this._phoneField.value)) this._showError(errors, this._phoneField, 'Please use a valid phone format: 10-11 digits')

      //prettier-ignore
      if(!this._regExMail.test(this._mailField.value)) this._showError(errors, this._mailField, 'Please use valid e-mail format: example@mail.com')

      //prettier-ignore
      if(this._messageField.value.length > 200) this._showError(errors, this._messageField, `Message can't be longer then 200 characters`);


      if (errors.length > 0) {
        e.preventDefault();
        return;
      }

      this._addFormValues();
    });
  }

  _showError(errors, field, message) {
    errors.push('err');
    field.nextElementSibling.classList.remove('hidden');
    field.nextElementSibling.firstElementChild.innerText = message;
    field.classList.add(`wrong-input`);
  }

  _addFormValues() {
    this._workerData.name = this._allInputs[0].value;
    this._workerData.phone = this._allInputs[1].value;
    this._workerData.mail = this._allInputs[2].value;
    this._allInputs[3].value.length > 0
      ? (this._workerData.message = this._allInputs[3].value)
      : '';
  }

  sendFormValues() {
    if (!this._workerData) return;
    return this._workerData;
  }
}

export default new FormValidationView();
