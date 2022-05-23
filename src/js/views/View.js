export default class View {
  render(content = '') {
    const markup = this._generateMarkup(content);

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  textContentTrim(el) {
    return el.textContent.trim();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._overlayWindow.classList.toggle('hidden');
  }

  _toggleWindowEsc(e) {
    if (e.key !== 'Escape' || this._overlay.classList.contains('hidden'))
      return;

    this.toggleWindow();
  }

  _addHandlerShowWindow() {
    this._openBtn.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    if (this._closingOptions === 2) {
      [this._closeWindow, this._overlay].forEach((el) => {
        el.addEventListener('click', this.toggleWindow.bind(this));
      });
      return;
    }

    this._closeWindow.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerEscWindow() {
    document.addEventListener('keydown', this._toggleWindowEsc.bind(this));
  }
}
