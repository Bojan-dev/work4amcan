export default class View {
  _data;
  _currPage = 0;

  render() {
    const markup = this._generateMarkup();

    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
