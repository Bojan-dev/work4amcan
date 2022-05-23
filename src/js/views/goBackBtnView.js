import View from './View';

class GoBackBtnView extends View {
  _backBtn = document.getElementById('go-back-btn');

  addHandlerBack(handler) {
    this._backBtn.addEventListener('click', (e) => {
      handler();
    });
  }
}

export default new GoBackBtnView();
