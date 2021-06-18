import View from './View';
import currentPageBarView from './currentPageBarView';
import switchJobView from './switchJobView';

class SwitchPageView extends View {
  _switchPageBtns = document.querySelectorAll('.next-page');
  _allPages = Array.from(document.querySelectorAll('[data-pageNum]'));

  addHandlerClick(handler) {
    this._switchPageBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this._updatePage(e, handler);
        this._toggleUIClass(this._currPage);
      });
    });
  }

  _toggleUIClass(page) {
    return page <= 3
      ? this._allPages.map((page) => page.classList.add('hidden')) &&
          this._allPages[page].classList.remove('hidden')
      : '';
  }

  _updatePage(e, handler) {
    //Calling model function and pushing answer:
    let answer;
    if (this._currPage <= 1) {
      answer = this.textContentTrim(e.target.closest('button'));
    }
    if (this._currPage === 2) answer = switchJobView.returnChosedJob();
    if (this._currPage === 3) answer = 2;
    handler(answer);
    //Updating current page bar:
    currentPageBarView.updateCurrentPageBar();
    //Updating page number:
    this.updateCurrPage();
  }
}

export default new SwitchPageView();

// `${this._currPage > 1 ? `.container-left__btns` : `.submit-btn`}`
