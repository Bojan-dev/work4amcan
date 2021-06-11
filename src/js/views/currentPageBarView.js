import View from './View';

class CurrentPageBarView extends View {
  _parentElement = document.getElementById('current-page-bar');
  _allPages = [
    `Choose working location`,
    `Choose available vehicles`,
    `Select desired job`,
    `Fill the form`,
  ];

  updateCurrentPageBar() {
    if (this._currPage + 2 > 4) return;
    this._currPage++;
    this._updatePageNum();
    this._updatePageName();
    this._updatePageBar();
  }

  _updatePageNum() {
    const currPage = this._parentElement.querySelector('span');
    currPage.textContent = `0${+currPage.textContent.slice(1) + 1}`;
  }

  _updatePageName() {
    const pageName = this._parentElement.lastElementChild;
    pageName.textContent = this._allPages[this._currPage];
  }

  _updatePageBar() {
    const pageBar = this._parentElement.querySelector('div').firstElementChild;
    pageBar.style.width = `${25 * (this._currPage + 1)}%`;
  }
}

export default new CurrentPageBarView();
