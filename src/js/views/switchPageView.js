import View from './View';
import currentPageBarView from './currentPageBarView';
import updatePageUIView from './updatePageUIView';

class SwitchPageView extends View {
  _btnsContainer = document.querySelector('.container-left__btns');
  _pageUI = document.querySelector('.container');

  addHandlerClick(handler) {
    this._btnsContainer.addEventListener('click', function (e) {
      const clicked = e.target.tagName.toLowerCase();
      if (clicked !== 'button' && clicked !== 'img') return;
      //Calling model function and pushing answer:
      const answer = e.target.closest('button').textContent.trim();
      handler(answer);
      //Updating current page bar:
      currentPageBarView.updateCurrentPageBar();
      //Updating page UI:
      updatePageUIView.pushPrevious();
      updatePageUIView.render();
    });
  }
}

export default new SwitchPageView();
