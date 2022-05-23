import View from './View';

class CurrentPageBarView extends View {
  _parentElement = document.getElementById('current-page-bar');
  _allPages = [
    `Choose working location`,
    `Choose available vehicles`,
    `Select desired job`,
    `Fill the form`,
  ];

  updateCurrentPageBar(currPage) {
    if (currPage >= 4) return;
    this._updatePageNum(currPage);
    this._updatePageName(currPage);
    this._updatePageBar(currPage);
  }

  _updatePageNum(currPage) {
    const textEl = this._parentElement.querySelector('span');
    textEl.textContent = `0${currPage + 1}`;
  }

  _updatePageName(currPage) {
    const pageName = this._parentElement.lastElementChild;
    pageName.textContent = this._allPages[currPage];
  }

  _updatePageBar(currPage) {
    const pageBar = this._parentElement.querySelector('div').firstElementChild;
    pageBar.style.width = `${25 * (currPage + 1)}%`;
  }
}

export default new CurrentPageBarView();
