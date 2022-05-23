import View from './View';
import switchJobView from './switchJobView';
import goBackBtnView from './goBackBtnView';
import formValidationView from './formValidationView';
import currentPageBarView from './currentPageBarView';

class SwitchPageView extends View {
  _switchPageBtns = document.querySelectorAll('.next-page');
  _allPages = Array.from(document.querySelectorAll('[data-pageNum]'));

  addHandlerClick(handler) {
    this._switchPageBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        handler(e);
      });
    });
  }

  toggleUIClass(page) {
    return page <= 3
      ? this._allPages.map((page) => page.classList.add('hidden')) &&
          this._allPages[page].classList.remove('hidden')
      : '';
  }
}

export default new SwitchPageView();

// `${this._currPage > 1 ? `.container-left__btns` : `.submit-btn`}`
