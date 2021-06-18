export default class View {
  _data;
  _currPage = 0;

  render(content = '') {
    const markup = this._generateMarkup(content);

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  updateCurrPage() {
    this._currPage++;
  }

  textContentTrim(el) {
    return el.textContent.trim();
  }
}
