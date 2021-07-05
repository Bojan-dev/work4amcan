import View from './View';

class FormValidationView extends View {
  _form = document.querySelector('form');
  _nameField = this._form.querySelector('#name-field');
  _phoneField = this._form.querySelector('#phone-field');
  _mailField = this._form.querySelector('#mail-field');
  _messageField = this._form.querySelector('#message-field');
  _regExName = /^[a-zA-z]+$/;
  _regExPhone = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;
  _regExMail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() {
    super();
    this._form.querySelectorAll('input').forEach((input) =>
      input.addEventListener('focus', function (e) {
        e.target.classList.remove('wrong-input');
        e.target.nextElementSibling.classList.add('hidden');
      })
    );
  }

  addHandlerSubmit() {
    this._form.addEventListener('submit', (e) => {
      const errors = [];
      e.preventDefault();
      //prettier-ignore
      if (!this._regExName.test(this._nameField.value)) this._pushError(errors, this._nameField, 'Name can contain only letters');

      //prettier-ignore
      if (this._nameField.value.length <= 1) this._pushError(errors, this._nameField, 'Name has to be at least 2 characters long')

      //prettier-ignore
      if(!this._regExPhone.test(this._phoneField.value)) this._pushError(errors, this._phoneField, 'Please use valid phone format')

      //prettier-ignore
      if(this._phoneField.value.match(/\d+/g).map(Number).join('').length !== 11) this._pushError(errors, this._phoneField, 'Number should be 11 digits long')

      const x = this._phoneField.value
        .match(/\d+/g)
        .map(Number && 0)
        .join('').length;

      console.log(x);

      this._form.querySelectorAll('input').forEach((input) => {
        input.blur();
      });
      if (errors.length > 0) {
        e.preventDefault();
      }
    });
  }

  _pushError(errors, field, message) {
    errors.push('err');
    field.nextElementSibling.classList.remove('hidden');
    field.nextElementSibling.firstElementChild.innerText = message;
    field.classList.add(`wrong-input`);
  }

  _checkPhoneField(number) {
    const regEx = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;
    const splitNumbers = number.value.match(/\d+/g).map(Number).join('');

    return regEx.test(number.value) && splitNumbers.length === 11;
  }

  _checkMailField(mail) {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(mail.value);
  }

  _checkMessageField(message) {
    return message.value.length < 250;
  }
}

export default new FormValidationView();
