import View from './View';

class ChangePageView extends View {
  _btns = document.querySelectorAll('.choose-option');

  addHandlerClick(handler) {
    this._btns.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const btn = e.target;

        console.log(btn);

        handler();
      });
    });
  }
}

export default new ChangePageView();
