import View from './View';

class SwitchPageView extends View {
  _btns = document.querySelectorAll('.choose-option');

  addHandlerClick(handler) {
    this._btns.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const btn = e.target;

        handler();
      });
    });
  }
}

export default new SwitchPageView();
